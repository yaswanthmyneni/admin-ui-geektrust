const getFilteredListBySearch = (employeeList, searchValue) => {
  const value = searchValue.toLowerCase();
  if (value.match(/^\s*$/)) {
    return employeeList;
  }
  return employeeList.filter((employee) => {
    return (
      employee.name.toLowerCase().includes(value) ||
      employee.role.toLowerCase().includes(value) ||
      employee.email.toLowerCase().includes(value)
    );
  });
};

export { getFilteredListBySearch };
