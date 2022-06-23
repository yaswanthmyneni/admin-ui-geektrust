const reducerFunction = (state, { type, payload }) => {
  switch (type) {
    case "SET_EMPLOYEE_LIST":
      return { ...state, employeeList: payload };
    default:
      return state;
  }
};

export { reducerFunction };
