import React from "react";
import { Route } from "react-router-dom";
import DivisionForm from "../components/DivisionForm";

export default ({
  categories,
  divisionFormState,
  saveDivisionFormState,
  addDivisionToState,
  showError,
}) => (
  <DivisionForm
    categories={categories}
    initialState={divisionFormState}
    onSave={saveDivisionFormState}
    onSuccess={addDivisionToState}
    onFailure={showError}
  />
);
