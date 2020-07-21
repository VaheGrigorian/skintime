import React from "react";
import { useField } from "formik";

import "../theme/partials/Input.module.css";

export default (props) => {
  const [field, meta] = useField(props);

  return (
    <p className="input-wrapper">
      <input className="input" {...field} {...props} />
      <span className="error">{meta.error}</span>
    </p>
  );
};
