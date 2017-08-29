import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import $ from "jquery";
import store from "./store";
import App from "./container/app";
import "font-awesome/css/font-awesome.css";
import "./paper.css";
import "./index.css";
import "react-toastify/dist/ReactToastify.min.css";
import { BrowserRouter } from "react-router-dom";

window.jQuery = window.$ = $;
require("bootstrap");

const target = document.querySelector("#root");

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  target
);
