import React from "react";
import { useField } from "formik";

import "../theme/partials/Input.module.css";

export default (props) => {
  const [field] = useField(props);

  return <textarea className="input" {...field} {...props} />;
};
