import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./components/App";
import rootReducer from "./reducers";

const store = createStore(rootReducer);

render(
  <Provider store={store}>
    <Router>
      <Route path="/:filter?" component={App} />
    </Router>
  </Provider>,
  document.getElementById("root")
);
