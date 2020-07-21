import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";
import Input from "./Input";
import Button from "./Button";
import { submitForm } from "../utils/submitForm";

let schema = yup.object().shape({
  title: yup.string().required(),
});

export default ({ initialState, onSave, onSuccess, onFailure }) => {
  return (
    <Formik
      validationSchema={schema}
      initialValues={initialState}
      onSubmit={(values) => {
        console.log(values);
        submitForm("/api/v1/departments", values, onSuccess, onFailure);
      }}
    >
      {({ values }) => (
        <Form>
          <label htmlFor="title">Title</label>
          <Input name="title" id="title" />
          <Button type="button" onClick={() => onSave(values)}>
            Save
          </Button>
          <Button type="reset">Cancel</Button>
          <Button type="submit">Create</Button>
        </Form>
      )}
    </Formik>
  );
};
