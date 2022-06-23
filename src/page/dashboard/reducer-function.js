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
    default:
      return state;
  }
};

export { reducerFunction };
