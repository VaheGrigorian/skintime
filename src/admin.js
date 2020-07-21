import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Admin from "./apps/Admin";

ReactDOM.render(
  <Router>
    <Admin />
  </Router>,
  document.getElementById("app")
);
