import React from "react";
import { NavLink } from "react-router-dom";

import "../theme/partials/MenuItem.module.css";

export default ({ title, children }) => (
  <li className="menu-item">
    {title && <span>{title}</span>}
    {children}
  </li>
);
