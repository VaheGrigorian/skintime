import React from "react";
import { useField } from "formik";
import styled from "styled-components";

const Select = styled.select``;

export const FormikSelect = (props) => {
  const [field] = useField(props);

  return <Select {...field} {...props} />;
};

export default Select;
