import axios from "axios";
import React, { useEffect, useReducer } from "react";
import { EmployeeCard, SearchBar } from "../../components";
import { reducerFunction } from "./reducer-function";

function Dashboard() {
  const initialState = {
    employeeList: [],
  };

  const [state, dispatch] = useReducer(reducerFunction, initialState);
  const { employeeList } = state;

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
  return (
    <main className="w-11/12 lg:w-3/4 h-screen mx-auto">
      <SearchBar />
      <section className="h-3/5 w-full overflow-auto">
        <table className="w-full">
          <thead>
            <tr className="border border-t-0 border-l-0 border-r-0 border-gray-300 text-left">
              <th>
                <input type="checkbox" className="cursor-pointer"/>
              </th>
              <th className="p-2">Name</th>
              <th className="p-2">Email</th>
              <th className="p-2">Role</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {employeeList.map((employee) => (
              <EmployeeCard key={employee.id} employee={employee} />
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}

export { Dashboard };
