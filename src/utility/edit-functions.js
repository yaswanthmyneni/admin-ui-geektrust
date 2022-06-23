const editEmployeeDetailsHandler = (
  event,
  id,
  dispatch,
  setFormData,
  initialState,
  formData,
  employeeList
) => {
  event.preventDefault();
  const { name, role, email } = formData;
  const regex = /^\s*$/;
  if (
    name.match(regex) !== null ||
    role.match(regex) !== null ||
    email.match(regex) !== null
  ) {
    return console.warn("Please provide valid input.");
  }
  const updatedEmployeeList = employeeList.map((employee) => {
    if (employee.id === id) {
      return { ...employee, ...formData };
    }
    return employee;
  });
  dispatch({ type: "EDIT_EMPLOYEE_DETAILS", payload: updatedEmployeeList });
  setFormData(initialState);
};

export { editEmployeeDetailsHandler };
