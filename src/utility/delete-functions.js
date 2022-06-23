const deleteSelectedEntires = (employeeList, checkedList, dispatch) => {
  const updatedEmployeeList = employeeList.filter(
    (employeeDetails) => !checkedList.includes(employeeDetails.id)
  );
  dispatch({ type: "DELETE_SELECTED_ENTRIES", payload: updatedEmployeeList });
};

const deleteHandler = (id, employeeList, dispatch) => {
  const updatedEmployeeList = employeeList.filter(
    (employee) => employee.id !== id
  );
  dispatch({ type: "SET_EMPLOYEE_LIST", payload: updatedEmployeeList });
};

const selectAllHandler = (
  dispatch,
  isChecked,
  checkedList,
  currentPageEmployeeList
) => {
  dispatch({ type: "IS_CHECKED", payload: !isChecked });
  const updatedCheckedList = currentPageEmployeeList.reduce((acc, curr) => {
    return [...acc, curr.id];
  }, []);
  isChecked
    ? dispatch({ type: "SET_CHECKED_LIST", payload: [] })
    : dispatch({ type: "SET_CHECKED_LIST", payload: updatedCheckedList });
};

const selectHandler = (checkedList, employeeId, dispatch) => {
  if (checkedList.includes(employeeId)) {
    dispatch({
      type: "REMOVE_FROM_CHECKED_LIST",
      payload: employeeId,
    });
  } else dispatch({ type: "ADD_TO_CHECKED_LIST", payload: employeeId });
};

export {
  deleteSelectedEntires,
  deleteHandler,
  selectAllHandler,
  selectHandler,
};
