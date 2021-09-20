import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { errorAlert, loadingAlert, successAlert } from "shared/alerts";
import { logoutAction } from "screens/Accounts/actions";
import { SCREENS } from "shared/constants";
import { CNABUploadComponent } from "../components";
import { CNABUploadAPI } from "../api";

class CNABUploadContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {stores: []};
  }

  __logout = () => {
    const { dispatch } = this.props;
    dispatch(logoutAction());
    dispatch(push(SCREENS.LOGIN));
    successAlert("Tenha um ótimo dia!");
  }

  __validateFileType = file => {
    if (file.type !== "text/plain") {
      errorAlert(`Arquivo do tipo '${file.type}' inválido, o tipo correto é text/plain.`);
      return {
        code: "invalid-type",
        message: "Arquivo do tipo errado."
      };
    }
  }

  __submitFile = async file => {
    loadingAlert("Realizando o upload...");
    let formData = new FormData();
    formData.append("file", file);

    try {
      const response = await CNABUploadAPI(formData);
      if (response.data && response.data["success"]) {
        this.setState({ stores: response.data["results"] });
        successAlert("Upload realizado com sucesso!");
      } else {
        errorAlert("Ocorreu algum problema de comunicação.");
      }

    } catch(error) {
      errorAlert(error);
    }
  }

  render() {
    return (
      <CNABUploadComponent
        {...this.props}
        {...this.state}
        validator={this.__validateFileType}
        submit={this.__submitFile}
        logout={this.__logout}
      />
    );
  }
}

export default connect()(CNABUploadContainer);
