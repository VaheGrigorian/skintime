import React from "react";
import { NavLink } from "react-router-dom";

import "../theme/partials/Menu.module.css";

export default ({ to, title, children }) => (
  <div className="menu">
    <NavLink to={to}>{title}</NavLink>
    <div>{children}</div>
  </div>
);
