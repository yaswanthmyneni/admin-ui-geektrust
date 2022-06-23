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
    case "IS_CHECKED":
      return { ...state, isChecked: !state.isChecked };
    case "SET_CHECKED_LIST":
      return { ...state, checkedList: payload };
    case "ADD_TO_CHECKED_LIST":
      return {
        ...state,
        checkedList: [...state.checkedList, payload],
      };
    case "REMOVE_FROM_CHECKED_LIST":
      return {
        ...state,
        checkedList: state.checkedList.filter(
          (employeeId) => employeeId !== payload
        ),
      };
    case "DELETE_SELECTED_ENTRIES":
      return {
        ...state,
        checkedList: [],
        isChecked: false,
        employeeList: payload,
      };
    default:
      return state;
  }
};

export { reducerFunction };
