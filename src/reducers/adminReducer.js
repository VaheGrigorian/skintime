export const LOADED_INIT_DATA = "LOADED_INIT_DATA";

export const DEPARTMENT_ADDED = "DEPARTMENT_ADDED";
export const CATEGORY_ADDED = "CATEGORY_ADDED";
export const DIVISION_ADDED = "DIVISION_ADDED";
export const BRAND_ADDED = "BRAND_ADDED";
export const PRODUCT_ADDED = "PRODUCT_ADDED";

export const SAVE_PRODUCT_FORM = "SAVE_PRODUCT_FORM";
export const SAVE_DEPARTMENT_FORM = "SAVE_DEPARTMENT_FORM";
export const SAVE_CATEGORY_FORM = "SAVE_CATEGORY_FORM";
export const SAVE_DIVISION_FORM = "SAVE_DIVISION_FORM";
export const SAVE_BRAND_FORM = "SAVE_BRAND_FORM";

export const SHOW_ERROR = "SHOW_ERROR";

export const AdminReducer = (state, action) => {
  switch (action.type) {
    case LOADED_INIT_DATA:
      return { ...state, ...action.payload };
    case SAVE_PRODUCT_FORM:
      return { ...state, savedProductForm: action.product };
    case SAVE_DEPARTMENT_FORM:
      return { ...state, savedDepartmentForm: action.department };
    case SAVE_CATEGORY_FORM:
      return { ...state, savedCategoryForm: action.category };
    case SAVE_DIVISION_FORM:
      return { ...state, savedDivisionForm: action.division };
    case SAVE_BRAND_FORM:
      return { ...state, savedBrandForm: action.brand };
    case DEPARTMENT_ADDED:
      return {
        ...state,
        departments: [...state.departments, action.department],
      };
    case CATEGORY_ADDED:
      return {
        ...state,
        categories: [...state.categories, action.category],
      };
    case DIVISION_ADDED:
      return {
        ...state,
        divisions: [...state.divisions, action.division],
      };
    case BRAND_ADDED:
      return {
        ...state,
        brands: [...state.brands, action.brand],
      };
    case PRODUCT_ADDED:
      return {
        ...state,
        products: [...state.products, action.product],
      };
    default:
      return state;
  }
};
