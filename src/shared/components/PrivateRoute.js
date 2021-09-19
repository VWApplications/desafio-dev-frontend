import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { errorAlert } from "../alerts";
import { PERMISSIONS, SCREENS } from "../constants";
import { hasPermission, isAuthenticated, getLoggedUser } from "../utils";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { requiredPermission, user, location } = rest;

  let permissions = [];
  if (user) { permissions = user.groups; }

  if (user && user.is_staff && !user.groups.includes(PERMISSIONS.ADMIN)) {
    permissions.push(PERMISSIONS.ADMIN);
  }

  if (!user && isAuthenticated()) {
    errorAlert("Usuário não encontrado, por favor acesse novamente e não utilize a URL como navegação.");
    localStorage.removeItem("cnab-token");
    return <Redirect to={{ pathname: SCREENS.LOGIN }} />;
  }

  if (!isAuthenticated()) {
    errorAlert("Você precisa tá logado para realizar essa ação.");
    return <Redirect to={SCREENS.LOGIN} />;
  }

  if (!hasPermission(requiredPermission, permissions)) {
    errorAlert("Você não tem permissão para realizar essa ação.");
    return <Redirect to={{ pathname: SCREENS.LOGIN, state: { user }}} />;
  }

  if (location.key) {
    return <Route {...rest} render={props => <Component {...props} />} />;
  }

  errorAlert("Por favor, não utilize a url como navegação.");
  localStorage.removeItem("cnab-token");
  return <Redirect to={{ pathname: SCREENS.LOGIN }} />;
};

const mapStateToProps = state => {
  const user = getLoggedUser(state);

  return { user };
};

export default connect(mapStateToProps)(PrivateRoute);
