import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import { createStore, compose, applyMiddleware } from "redux";
import createRootReducer from "../reducers";

export const history = createBrowserHistory();

const middlewares = [routerMiddleware(history)];

const store = createStore(createRootReducer(history), compose(applyMiddleware(...middlewares)));

export default store;
