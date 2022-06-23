import axios from "axios";
import React, { useEffect, useReducer } from "react";
import {
  EditModal,
  EmployeeCard,
  NavigationBottom,
  SearchBar,
} from "../../components";
import {
  deleteHandler,
  deleteSelectedEntires,
  getCurrentPageEmployeeList,
  getFilteredListBySearch,
  pageRange,
  selectAllHandler,
} from "../../utility";
import { reducerFunction } from "./reducer-function";

function Dashboard() {
  const initialState = {
    employeeList: [],
    currentPage: 1,
    searchValue: "",
    isEditModal: false,
    id: null,
    isChecked: false,
    checkedList: [],
  };

  const [state, dispatch] = useReducer(reducerFunction, initialState);
  const pageLimit = 10;
  const {
    employeeList,
    currentPage,
    searchValue,
    isEditModal,
    id,
    checkedList,
    isChecked,
  } = state;

  useEffect(() => {
    const fetchEmployeeList = async () => {
      const response = await axios.get(
        "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
      );
      if (response.status === 200) {
        dispatch({ type: "SET_EMPLOYEE_LIST", payload: response.data });
      }
    };
    fetchEmployeeList();
  }, []);

  // filtering by search input
  const filteredListBySearch = getFilteredListBySearch(
    employeeList,
    searchValue
  );

  // calculations for pagination
  const pagePills = Math.ceil(filteredListBySearch.length / pageLimit);
  const pages = pageRange(pagePills);
  const currentPageEmployeeList = getCurrentPageEmployeeList(
    filteredListBySearch,
    currentPage,
    pageLimit
  );
  console.log(checkedList);

  return (
    <main className="w-11/12 lg:w-3/4 h-screen mx-auto">
      <SearchBar searchValue={searchValue} dispatch={dispatch} />
      <section className="h-3/5 w-full overflow-auto">
        <table className="w-full">
          <thead>
            <tr className="border border-t-0 border-l-0 border-r-0 border-gray-300 text-left">
              <th className="pl-2">
                <input
                  type="checkbox"
                  className="cursor-pointer"
                  checked={isChecked}
                  onChange={() =>
                    selectAllHandler(
                      dispatch,
                      isChecked,
                      checkedList,
                      currentPageEmployeeList
                    )
                  }
                />
              </th>
              <th className="p-2">Name</th>
              <th className="p-2">Email</th>
              <th className="p-2">Role</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentPageEmployeeList.map((employee) => (
              <EmployeeCard
                key={employee.id}
                employee={employee}
                dispatch={dispatch}
                deleteHandler={deleteHandler}
                employeeList={employeeList}
                checkedList={checkedList}
              />
            ))}
          </tbody>
        </table>
      </section>
      <NavigationBottom
        pages={pages}
        dispatch={dispatch}
        currentPage={currentPage}
        deleteSelectedEntires={() =>
          deleteSelectedEntires(employeeList, checkedList, dispatch)
        }
      />
      <EditModal
        isEditModal={isEditModal}
        id={id}
        dispatch={dispatch}
        employeeList={employeeList}
      />
    </main>
  );
}

export { Dashboard };
