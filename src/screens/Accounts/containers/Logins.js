import React, { Component } from "react";
import { LoginComponent } from "../components";

class LoginContainer extends Component {
  render() {
    return (
      <LoginComponent {...this.props} />
    );
  }
}

export default LoginContainer;
