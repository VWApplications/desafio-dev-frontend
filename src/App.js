import React from "react";
import { Switch, Route } from "react-router-dom";
import { Login } from "./screens/Accounts";
import { CNABUpload } from "./screens/CNAB";
import { PrivateRoute } from "shared/components";
import { SCREENS } from "shared/constants";

const App = () => (
  <Switch>
    <Route exact path={SCREENS.LOGIN} component={Login} />
    <PrivateRoute exact path={SCREENS.CNAB} component={CNABUpload} />
    <Route exact path="/404" component={Login} />
    <Route path='*' component={Login} />
  </Switch>
);

export default App;
