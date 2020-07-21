import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import * as yup from "yup";

import { Formik, Form } from "formik";
import Input from "./Input";
import Select from "./Select";
import Textarea from "./Textarea";
import Button from "./Button";
import Fieldset from "./Fieldset";
import { submitForm } from "../utils/submitForm";

let schema = yup.object().shape({
  title: yup.string().required(),
  departmentId: yup.number().moreThan(0).required(),
  categoryId: yup.number().moreThan(0).required(),
  divisionId: yup.number().moreThan(0).required(),
  brandId: yup.number().moreThan(0).required(),
  description: yup.string(),
  quantity: yup.number().moreThan(0).required(),
  variants: yup.number().moreThan(0),
  weightUnit: yup.string(),
  dimensionUnit: yup.string(),
  len: yup.number().moreThan(0),
  width: yup.number().moreThan(0),
  height: yup.number().moreThan(0),
});

import "../theme/partials/Label.module.css";

const AddProductForm = ({
  departments = [],
  categories = [],
  divisions = [],
  brands = [],
  variants = [],
  weightUnits = [],
  dimensionUnits = [],
  initialState,
  onSave,
  onSuccess,
  onFailure,
}) => {
  return (
    <Formik
      validateOnBlur
      validationSchema={schema}
      initialValues={initialState}
      onSubmit={(values) => {
        submitForm("/api/v1/products", values, onSuccess, onFailure);
      }}
    >
      {({ values }) => {
        return (
          <Form>
            <label htmlFor="title">Title</label>
            <Input name="title" id="title" />
            <Select name="brandId">
              <option value="0">Select brand</option>
              {brands.map((b, idx) => (
                <option key={`brand__${idx}`} value={b.id}>
                  {b.title}
                </option>
              ))}
            </Select>
            <Select name="divisionId">
              <option value="0">Select division</option>
              {divisions.map((d, idx) => (
                <option key={`div__${idx}`} value={d.id}>
                  {d.title}
                </option>
              ))}
            </Select>

            <label htmlFor="description">Description</label>
            <Textarea name="description" id="description" rows={6}></Textarea>

            <Select name="variants">
              <option value="0">Select variants</option>
              {variants.map((vr, idx) => (
                <option key={`vr__${idx}`} value={vr.id}>
                  {vr.title}
                </option>
              ))}
            </Select>

            <label htmlFor="qty">Quantity</label>
            <Input type="number" name="quantity" id="qty" />

            <label htmlFor="sku">SKU</label>
            <Input type="text" name="sku" id="sku" />

            <label htmlFor="barcode">Barcode</label>
            <Input type="text" name="barcode" id="barcode" />

            <Select name="weightUnit">
              <option value="0">Select unit</option>
              {weightUnits.map((wu, idx) => (
                <option key={`wu__${idx}`} value={wu.id}>
                  {wu.title}
                </option>
              ))}
            </Select>

            <Input type="number" name="weight" />

            <Fieldset row>
              <Select name="dimensionsUnit">
                <option value="0">Select dimension unit</option>
                {dimensionUnits.map((du, idx) => (
                  <option key={`du__${idx}`} value={du.id}>
                    {du.title}
                  </option>
                ))}
              </Select>
              <Input type="text" name="length" placeholder="Length..." />
              <Input type="text" name="width" placeholder="Width..." />
              <Input type="text" name="height" placeholder="Height..." />
            </Fieldset>
            <Fieldset>
              <Button type="button" onClick={() => onSave(values)}>
                Save
              </Button>
              <Button type="reset">Cancel</Button>
              <Button type="submit">Submit and Go to Images</Button>
            </Fieldset>
          </Form>
        );
      }}
    </Formik>
  );
};

AddProductForm.propTypes = {
  departments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
  divisions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
  brands: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
  variants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

export default AddProductForm;
