import * as React from "react";
import * as ReactDOM from "react-dom";
import { ToDo } from "./components/ToDo";
import { stateStore } from "./components/AppStore";
import "./css/main.scss";

ReactDOM.render(
  <ToDo store={stateStore} />,
  document.getElementById("container")
);
