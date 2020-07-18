import React from "react";
import { useField } from "formik";
import styled from "styled-components";

const Textarea = styled.textarea``;

export const FormikTextarea = (props) => {
  const [field] = useField(props);

  return <Textarea {...field} {...props} />;
};

export default Textarea;
