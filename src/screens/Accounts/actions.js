import { LOGIN, LOGOUT } from "./types";

export const loginAction = data => ({ type: LOGIN, payload: data });

export const logoutAction = () => ({ type: LOGOUT });
