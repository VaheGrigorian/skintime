import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";
import Input from "./Input";
import Button from "./Button";
import Select from "./Select";
import { submitForm } from "../utils/submitForm";

let schema = yup.object().shape({
  title: yup.string().required(),
  departmentId: yup.number().moreThan(0).required(),
});

export default ({
  departments,
  initialState,
  onSave,
  onSuccess,
  onFailure,
}) => {
  return (
    <Formik
      validationSchema={schema}
      initialValues={initialState}
      onSubmit={(values) => {
        submitForm("/api/v1/categories", values, onSuccess, onFailure);
      }}
    >
      {({ values }) => (
        <Form>
          <label htmlFor="title">Title</label>
          <Input name="title" id="title" />
          <Select name="departmentId">
            <option value="0">Select department</option>
            {departments.map((d, idx) => (
              <option key={`dep__${idx}`} value={d.id}>
                {d.title}
              </option>
            ))}
          </Select>
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
