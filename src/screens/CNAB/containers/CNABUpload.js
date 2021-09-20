import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { errorAlert, successAlert } from "shared/alerts";
import { logoutAction } from "screens/Accounts/actions";
import { SCREENS } from "shared/constants";
import { CNABUploadComponent } from "../components";

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
      errorAlert(`Arquivo do tipo '${file.type}' inválido, o tipo correta é text/plain.`);
      return {
        code: "invalid-type",
        message: "Arquivo do tipo errado."
      };
    }
  }

  __submitFile = file => {
    console.log(file);
    this.setState({
      stores: [
        {
          "title": "LOJA DO Ó - FILIAL",
          "cpf": "556.418.150-63",
          "owner": "MARIA JOSEFINA",
          "total": 152.32,
          "cnabs": [
            {
              "transaction_type": "Crédito",
              "transaction_signal": "+",
              "date": "01/03/2019",
              "value": 152.32,
              "card": "1234****6678",
              "time": "10:00:00"
            }
          ]
        },
        {
          "title": "MERCEARIA 3 IRMÃOS",
          "cpf": "232.702.980-56",
          "owner": "JOSÉ COSTA",
          "total": -7023.0,
          "cnabs": [
            {
              "transaction_type": "Boleto",
              "transaction_signal": "-",
              "date": "01/03/2019",
              "value": 102.0,
              "card": "8473****1231",
              "time": "23:12:33"
            },
            {
              "transaction_type": "Financiamento",
              "transaction_signal": "-",
              "date": "01/03/2019",
              "value": 602.0,
              "card": "6777****1313",
              "time": "17:27:12"
            },
            {
              "transaction_type": "Financiamento",
              "transaction_signal": "-",
              "date": "01/03/2019",
              "value": 6102.0,
              "card": "6777****1313",
              "time": "17:27:12"
            },
            {
              "transaction_type": "Financiamento",
              "transaction_signal": "-",
              "date": "01/03/2019",
              "value": 103.0,
              "card": "6777****1313",
              "time": "17:27:12"
            },
            {
              "transaction_type": "Boleto",
              "transaction_signal": "-",
              "date": "01/03/2019",
              "value": 5.0,
              "card": "7677****8778",
              "time": "14:18:08"
            },
            {
              "transaction_type": "Boleto",
              "transaction_signal": "-",
              "date": "01/03/2019",
              "value": 109.0,
              "card": "8723****9987",
              "time": "12:33:33"
            }
          ]
        },
        {
          "title": "LOJA DO Ó - FILIAL",
          "cpf": "556.418.150-63",
          "owner": "MARIA JOSEFINA",
          "total": 152.32,
          "cnabs": [
            {
              "transaction_type": "Crédito",
              "transaction_signal": "+",
              "date": "01/03/2019",
              "value": 152.32,
              "card": "1234****6678",
              "time": "10:00:00"
            }
          ]
        },
        {
          "title": "LOJA DO Ó - FILIAL",
          "cpf": "556.418.150-63",
          "owner": "MARIA JOSEFINA",
          "total": 152.32,
          "cnabs": [
            {
              "transaction_type": "Crédito",
              "transaction_signal": "+",
              "date": "01/03/2019",
              "value": 152.32,
              "card": "1234****6678",
              "time": "10:00:00"
            }
          ]
        },
        {
          "title": "LOJA DO Ó - FILIAL",
          "cpf": "556.418.150-63",
          "owner": "MARIA JOSEFINA",
          "total": 152.32,
          "cnabs": [
            {
              "transaction_type": "Crédito",
              "transaction_signal": "+",
              "date": "01/03/2019",
              "value": 152.32,
              "card": "1234****6678",
              "time": "10:00:00"
            }
          ]
        },
        {
          "title": "LOJA DO Ó - FILIAL",
          "cpf": "556.418.150-63",
          "owner": "MARIA JOSEFINA",
          "total": 152.32,
          "cnabs": [
            {
              "transaction_type": "Crédito",
              "transaction_signal": "+",
              "date": "01/03/2019",
              "value": 152.32,
              "card": "1234****6678",
              "time": "10:00:00"
            }
          ]
        },
        {
          "title": "LOJA DO Ó - FILIAL",
          "cpf": "556.418.150-63",
          "owner": "MARIA JOSEFINA",
          "total": 152.32,
          "cnabs": [
            {
              "transaction_type": "Crédito",
              "transaction_signal": "+",
              "date": "01/03/2019",
              "value": 152.32,
              "card": "1234****6678",
              "time": "10:00:00"
            }
          ]
        },
        {
          "title": "LOJA DO Ó - FILIAL",
          "cpf": "556.418.150-63",
          "owner": "MARIA JOSEFINA",
          "total": 152.32,
          "cnabs": [
            {
              "transaction_type": "Crédito",
              "transaction_signal": "+",
              "date": "01/03/2019",
              "value": 152.32,
              "card": "1234****6678",
              "time": "10:00:00"
            }
          ]
        },
        {
          "title": "LOJA DO Ó - FILIAL",
          "cpf": "556.418.150-63",
          "owner": "MARIA JOSEFINA",
          "total": 152.32,
          "cnabs": [
            {
              "transaction_type": "Crédito",
              "transaction_signal": "+",
              "date": "01/03/2019",
              "value": 152.32,
              "card": "1234****6678",
              "time": "10:00:00"
            }
          ]
        },
      ]
    });
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
