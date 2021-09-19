import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { loadingAlert, successAlert, errorAlert } from "shared/alerts";
import { SCREENS } from "shared/constants";
import { LoginComponent } from "../components";
import { loginAPI } from "../api";
import { loginAction } from "../actions";


class LoginContainer extends Component {
  __redirectTo = (url, state=null) => {
    const { dispatch } = this.props;
    dispatch(push(url, state));
  }

  __submit = async data => {
    const { dispatch } = this.props;
    loadingAlert("Acessando...");

    try {
      const response = await loginAPI(data);
      if (response.data) {
        dispatch(loginAction({ token: response.data.access }));
        successAlert("Seja bem-vindo(a)");
        this.__redirectTo(SCREENS.CNAB);
      } else {
        errorAlert("Ocorreu algum problema de comunicação.");
      }

    } catch(error) {
      errorAlert(error);
    }
  }

  render() {
    return (
      <LoginComponent
        {...this.props}
        submit={this.__submit}
      />
    );
  }
}

export default connect()(LoginContainer);
