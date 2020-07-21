import styled from "styled-components";

import "../theme/partials/Fieldset.module.css";

export default ({ row, ...props }) => (
  <div role="group" className={row ? "row" : ""} {...props} />
);
