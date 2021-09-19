import React, { Component } from "react";
import { CNABUploadComponent } from "../components";


class CNABUploadContainer extends Component {
  render() {
    return (
      <CNABUploadComponent {...this.props} />
    );
  }
}

export default CNABUploadContainer;
