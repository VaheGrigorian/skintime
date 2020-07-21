import React from "react";
import { Route } from "react-router-dom";
import BrandForm from "../components/BrandForm";

export default ({
  brandFormState,
  saveBrandFormState,
  addBrandToState,
  showError,
}) => (
  <BrandForm
    initialState={brandFormState}
    onSave={saveBrandFormState}
    onSuccess={addBrandToState}
    onFailure={showError}
  />
);
