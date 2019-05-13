import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { candyStore } from "./store";
import { Root } from "./components/root";

ReactDOM.render(
  <Provider store={candyStore}>
    <Root />
  </Provider>,
  document.getElementById("main")
);
