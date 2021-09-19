import React, { Component } from "react";
import { LoginComponent } from "../components";

class LoginContainer extends Component {
  __submit = async data => {
    console.log(data);
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

export default LoginContainer;
