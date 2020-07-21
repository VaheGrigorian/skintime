import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
export default ({ children }) => {
  const [open, set] = useState(false);
  return (
    <aside className={`${open ? "open" : ""}`}>
      <button onClick={() => set(!open)}>
        <FontAwesomeIcon size="2x" icon={open ? faTimesCircle : faBars} />
      </button>
      <nav>{children}</nav>
    </aside>
  );
};
