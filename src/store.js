import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducer";

const composeEnhancers = (() => {
  if (process.env.NODE_ENV === "development") {
    return window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  }
  return compose;
})();

const configureStore = () =>
  createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default configureStore;
