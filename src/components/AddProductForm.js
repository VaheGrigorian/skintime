import React from "react";
import PropTypes from "prop-types";

import * as yup from "yup";

import { Formik, Form } from "formik";
import { FormikInput as Input } from "./Input";
import { FormikSelect as Select } from "./Select";
import { FormikTextarea as Textarea } from "./Textarea";
import Button from "./Button";
import Fieldset from "./Fieldset";

import { DepartmentType } from "../proptypes";

let schema = yup.object().shape();

const AddProductForm = ({
  brands = [],
  departments = [],
  categories = [],
  divisions = [],
  variants = [],
  weightUnits = [],
  dimensionUnits = [],
}) => {
  return (
    <Formik>
      {() => {
        return (
          <Form>
            <Input name="title" />
            <Select name="brandId">
              <option value="0">Select brand</option>
              {brands.map((b, idx) => (
                <option key={`brand__${idx}`} value={b.id}>
                  {b.title}
                </option>
              ))}
            </Select>
            <Select name="departmentId">
              <option value="0">Select department</option>
              {departments.map((d, idx) => (
                <option key={`dep__${idx}`} value={d.id}>
                  {d.title}
                </option>
              ))}
            </Select>
            <Select name="categoryId">
              <option value="0">Select category</option>
              {categories.map((c, idx) => (
                <option key={`cat__${idx}`} value={c.id}>
                  {c.title}
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

            <Textarea name="description"></Textarea>

            <Select name="variants">
              <option value="0">Select variants</option>
              {variants.map((vr, idx) => (
                <option key={`vr__${idx}`} value={vr.id}>
                  {vr.title}
                </option>
              ))}
            </Select>

            <Input type="number" name="quantity" />

            <Input type="text" name="sku" />

            <Input type="text" name="barcode" />

            <Select name="weightUnit">
              <option value="0">Select unit</option>
              {weightUnits.map((wu, idx) => (
                <option key={`wu__${idx}`} value={wu.id}>
                  {wu.title}
                </option>
              ))}
            </Select>

            <Input type="number" name="weight" />

            <Fieldset>
              <Select name="dimensionUnit">
                <option value="0">Select dimension unit</option>
                {dimensionUnits.map((du, idx) => (
                  <option key={`du__${idx}`} value={du.id}>
                    {du.title}
                  </option>
                ))}
              </Select>
              <Input type="text" name="length" />
              <Input type="text" name="width" />
              <Input type="text" name="height" />
            </Fieldset>

            <Button type="submit">Save</Button>
          </Form>
        );
      }}
    </Formik>
  );
};

AddProductForm.propTypes = {
  departments: PropTypes.arrayOf(DepartmentType),
};

export default AddProductForm;
