import React, { useCallback, useState } from "react";
import { Route } from "react-router-dom";
import ProductForm from "../components/ProductForm";
import Uploader from "./Uploader";

export default ({
  departments = [],
  categories = [],
  divisions = [],
  brands = [],
  variants = [],
  weightUnits = [],
  dimensionUnits = [],
  productFormState = {},
  saveProductFormState,
  addProductToState,
  showError,
}) => {
  const [submitState, setsubmitState] = useState({ success: false, id: null });

  const handleCreateSuccess = useCallback((product) => {
    setProductSubmitState({ success: true, id: product.id });
  }, []);

  return (
    <Route
      path="/products"
      component={() => {
        return submitState.success ? (
          <ProductForm
            departments={departments}
            categories={categories}
            divisions={divisions}
            brands={brands}
            variants={variants}
            weightUnits={weightUnits}
            dimensionUnits={dimensionUnits}
            initialState={productFormState}
            onSave={saveProductFormState}
            onSuccess={handleCreateSuccess}
            onFailure={showError}
          />
        ) : (
          <Uploader>
            <p>Drag files here</p>
          </Uploader>
        );
      }}
    />
  );
};
