import React from "react";
import { useField } from "formik";
import styled from "styled-components";
import theme from "styled-theming";

const InputBorderRadius = theme("mode", {
  admin: "6px",
});

const InputBorderColorFocus = theme("mode", { admin: "#222222" });

const Input = styled.input`
  width: 100%;
  border-radius: ${InputBorderRadius};
  padding-left: 12px;
  &:focus {
    border-color: ${InputBorderColorFocus};
    outline: 0;
  }
`;

export const FormikInput = (props) => {
  const [field] = useField(props);

  return <Input {...field} {...props} />;
};

export default Input;
