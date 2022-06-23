const reducerFunction = (state, { type, payload }) => {
  switch (type) {
    case "SET_EMPLOYEE_LIST":
      return { ...state, employeeList: payload };
    case "SET_CURRENT_PAGE":
      return { ...state, currentPage: payload };
    case "INCREMENT_CURRENT_PAGE":
      return { ...state, currentPage: state.currentPage + 1 };
    case "DECREMENT_CURRENT_PAGE":
      return { ...state, currentPage: state.currentPage - 1 };
    case "SET_SEARCH_VALUE":
      return { ...state, searchValue: payload };
      case "SET_IS_EDIT_MODAL":
      return { ...state, isEditModal: payload };
      case "ON_CLICK_EDIT_ICON":
        return { ...state, isEditModal: true, id: payload };
      case "EDIT_EMPLOYEE_DETAILS":
        return { ...state, isEditModal: false, employeeList: payload };
    default:
      return state;
  }
};

export { reducerFunction };
