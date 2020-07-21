import React, { useContext, useEffect, useState } from "react";

import Input from "../components/Input";
import Button from "../components/Button";

import AuthContext from "../ctx/auth";

// const LoginSchema = Yup.object().shape({
//   email: Yup.string().email().required(),
//   password: Yup.string()
//     .required()
//     .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/),
// });

export default ({ url }) => {
  const { authenticate } = useContext(AuthContext);
  const [submitting, setSubmitting] = useState(false);
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then(({ access_token }) => authenticate());
  }, [submitting]);

  return (
    <form onSubmit={() => setSubmitting(true)}>
      <Input
        name="email"
        placeholder="Email"
        type="email"
        onChange={(e) => setValues({ ...values, email: e.target.value })}
      />
      <Input
        name="password"
        placeholder="Password"
        type="password"
        onChange={(e) => setValues({ ...values, password: e.target.value })}
      />
      <Button type="submit">Log In</Button>
    </form>
  );
};
