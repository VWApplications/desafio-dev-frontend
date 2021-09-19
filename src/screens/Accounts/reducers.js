/* eslint-disable indent */
import { LOGIN, LOGOUT } from "./types";

const initialState = {
  token: null,
  user: null
};

function accountsReducer(state=initialState, action) {
  switch(action.type) {
    case LOGIN:
      const { token } = action.payload;
      localStorage.setItem("cnab-token", token);

      return {
        ...state,
        token: token
      };

    case LOGOUT:
      localStorage.removeItem("cnab-token");
      return state;

    default:
      return state;
  }
}

export default accountsReducer;
