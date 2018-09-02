import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "../src/js/components/App";

const app = document.getElementById('app');

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  app
);
