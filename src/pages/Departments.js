import React from "react";
import { Route } from "react-router-dom";
import DepartmentForm from "../components/DepartmentForm";

export default ({
  departmentFormState,
  saveDepartmentFormState,
  addDepartmentToState,
  showError,
}) => (
  <DepartmentForm
    initialState={departmentFormState}
    onSave={saveDepartmentFormState}
    onSuccess={addDepartmentToState}
    onFailure={showError}
  />
);
