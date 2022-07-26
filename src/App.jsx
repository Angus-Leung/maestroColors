import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Questionaire from "./Questionaire";

const App = () => (
  <div className="container">
    <Questionaire/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
