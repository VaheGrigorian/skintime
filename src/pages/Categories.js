import React from "react";
import { Route } from "react-router-dom";
import CategoryForm from "../components/CategoryForm";

export default ({
  departments,
  categoryFormState,
  saveCategoryFormState,
  addCategoryToState,
  showError,
}) => (
  <CategoryForm
    departments={departments}
    initialState={categoryFormState}
    onSave={saveCategoryFormState}
    onSuccess={addCategoryToState}
    onFailure={showError}
  />
);
