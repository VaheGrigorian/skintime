import React from "react";
import { useField } from "formik";

import "../theme/partials/Select.module.css";

export default (props) => {
  const [field] = useField(props);

  return (
    <p className="input-wrapper">
      <select className="input" {...field} {...props} />
    </p>
  );
};
