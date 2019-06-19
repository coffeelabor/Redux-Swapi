import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
// applyMiddleware from redux
import { createStore, applyMiddleware, compose } from "redux";
// rootReducer from ./reducers
import rootReducer from "./reducers";
// needed dependancies
// thunk from redux-thunk
import thunk from "redux-thunk";
// logger from redux-logger
// import logger from 'redux-logger'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  /* applyMiddleware goes here */
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
