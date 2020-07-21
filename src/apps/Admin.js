import React, { useReducer, useEffect } from "react";
import { Route, NavLink } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import Menu from "../components/Menu";
import MenuItem from "../components/MenuItem";
import Products from "../pages/Products";
import Brands from "../pages/Brands";
import Departments from "../pages/Departments";
import Categories from "../pages/Categories";
import Divisions from "../pages/Divisions";

import {
  AdminReducer,
  LOADED_INIT_DATA,
  SAVE_PRODUCT_FORM,
  PRODUCT_ADDED,
  SHOW_ERROR,
  SAVE_BRAND_FORM,
  BRAND_ADDED,
  SAVE_DEPARTMENT_FORM,
  DEPARTMENT_ADDED,
  SAVE_CATEGORY_FORM,
  CATEGORY_ADDED,
  SAVE_DIVISION_FORM,
  DIVISION_ADDED,
} from "../reducers/adminReducer";

import "../theme/admin.module.css";
import "../theme/partials/Sidebar.module.css";

const Admin = () => {
  const [state, dispatch] = useReducer(AdminReducer, {
    departments: [],
    categories: [],
    divisions: [],
    brands: [],
    savedDepartmentForm: {
      title: "",
    },
    savedCategoryForm: {
      title: "",
      departmentId: "",
    },
    savedDivisionFormState: {
      title: "",
      categoryId: "",
    },
    savedBrandForm: {
      title: "",
    },
    savedProductForm: {
      title: "",
      brandId: 0,
      divisionId: 0,
      description: "",
      variants: "0",
      quantity: 1,
      sku: "",
      barcode: "",
      weight: "",
      weightUnit: "G",
      length: "",
      width: "",
      height: "",
      dimensionsUnit: "cm",
    },
  });
  useEffect(() => {
    let depres = fetch("/api/v1/departments").then((res) => res.json());
    let catres = fetch("/api/v1/categories").then((res) => res.json());
    let divres = fetch("/api/v1/divisions").then((res) => res.json());
    let brres = fetch("/api/v1/brands").then((res) => res.json());

    Promise.all([depres, catres, divres, brres]).then(
      ([departments, categories, divisions, brands]) => {
        dispatch({
          type: LOADED_INIT_DATA,
          payload: { departments, categories, divisions, brands },
        });
      }
    );
  }, []);
  return (
    <>
      <Sidebar>
        <Menu>
          <MenuItem title="Warehouse">
            <Menu>
              <MenuItem>
                <NavLink to="/brands">Brands</NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink to="/products">Products</NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink to="/departments">Departments</NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink to="/categories">Categories</NavLink>
              </MenuItem>

              <MenuItem>
                <NavLink to="/divisions">Divisions</NavLink>
              </MenuItem>
            </Menu>
          </MenuItem>
          <MenuItem>
            <NavLink to="/orders">Orders</NavLink>
          </MenuItem>
        </Menu>
      </Sidebar>
      <main>
        <Route
          path="/products"
          component={() => (
            <Products
              departments={state.departments}
              categories={state.categories}
              divisions={state.divisions}
              brands={state.brands}
              productFormState={state.savedProductForm}
              saveProductFormState={(product) =>
                dispatch({ type: SAVE_PRODUCT_FORM, product })
              }
              addProductToState={(product) =>
                dispatch({ type: PRODUCT_ADDED, product })
              }
              showError={(e) => dispatch({ type: SHOW_ERROR, payload: e })}
            />
          )}
        />
        <Route
          path="/brands"
          component={() => (
            <Brands
              brandFormState={state.savedBrandForm}
              saveBrandFormState={(brand) =>
                dispatch({ type: SAVE_BRAND_FORM, brand })
              }
              addBrandToState={(brand) =>
                dispatch({ type: BRAND_ADDED, brand })
              }
              showError={(e) => dispatch({ type: SHOW_ERROR, payload: e })}
            />
          )}
        />
        <Route
          path="/departments"
          component={() => (
            <Departments
              departmentFormState={state.savedDepartmentForm}
              saveDepartmentFormState={(department) =>
                dispatch({ type: SAVE_DEPARTMENT_FORM, department })
              }
              addDepartmentToState={(department) =>
                dispatch({ type: DEPARTMENT_ADDED, department })
              }
              showError={(e) => dispatch({ type: SHOW_ERROR, payload: e })}
            />
          )}
        />
        <Route
          path="/categories"
          component={() => (
            <Categories
              departments={state.departments}
              categoryFormState={state.savedCategoryForm}
              saveCategoryFormState={(category) =>
                dispatch({ type: SAVE_CATEGORY_FORM, category })
              }
              addCategoryToState={(category) =>
                dispatch({ type: CATEGORY_ADDED, category })
              }
              showError={(e) => dispatch({ type: SHOW_ERROR, payload: e })}
            />
          )}
        />
        <Route
          path="/divisions"
          component={() => (
            <Divisions
              categories={state.categories}
              divisionFormState={state.savedDivisionFormState}
              saveDivisionFormState={(division) =>
                dispatch({ type: SAVE_DIVISION_FORM, division })
              }
              addDivisionToState={(division) =>
                dispatch({ type: DIVISION_ADDED, division })
              }
              showError={(e) => dispatch({ type: SHOW_ERROR, payload: e })}
            />
          )}
        />
      </main>
    </>
  );
};

export default Admin;
