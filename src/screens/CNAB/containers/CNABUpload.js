import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { errorAlert, successAlert } from "shared/alerts";
import { logoutAction } from "screens/Accounts/actions";
import { SCREENS } from "shared/constants";
import { CNABUploadComponent } from "../components";

class CNABUploadContainer extends Component {
  __logout = () => {
    const { dispatch } = this.props;
    dispatch(logoutAction());
    dispatch(push(SCREENS.LOGIN));
    successAlert("Tenha um ótimo dia!");
  }

  __validateFileType = file => {
    if (file.type !== "text/plain") {
      errorAlert(`Arquivo do tipo '${file.type}' inválido, o tipo correta é text/plain.`);
      return {
        code: "invalid-type",
        message: "Arquivo do tipo errado."
      };
    }
  }

  __submitFile = file => {
    console.log(file);
  }

  render() {
    return (
      <CNABUploadComponent
        {...this.props}
        validator={this.__validateFileType}
        submit={this.__submitFile}
        logout={this.__logout}
      />
    );
  }
}

export default connect()(CNABUploadContainer);
