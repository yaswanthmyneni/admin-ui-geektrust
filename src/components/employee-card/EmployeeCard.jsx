import React from "react";
import { MdOutlineDeleteOutline, FaRegEdit } from "../../assets/icons/icons";
import { selectHandler } from "../../utility";

const EmployeeCard = (props) => {
  const { employee, dispatch, deleteHandler, employeeList, checkedList } =
    props;
  const { id, name, role, email } = employee;

  return (
    <tr
      className={`border border-t-0 border-l-0 border-r-0 border-gray-300 text-left ${
        checkedList.includes(id) ? "bg-slate-400" : ""
      }`}
    >
      <td className="pl-2">
        <input
          type="checkbox"
          checked={checkedList.includes(id)}
          className="cursor-pointer"
          onChange={() => selectHandler(checkedList, id, dispatch)}
        />
      </td>
      <td className="p-2">{name}</td>
      <td className="p-2">{email}</td>
      <td className="p-2">{role}</td>
      <td className="p-2 text-xl flex gap-4">
        <FaRegEdit
          className="cursor-pointer"
          onClick={() => {
            dispatch({
              type: "ON_CLICK_EDIT_ICON",
              payload: id,
            });
          }}
        />
        <MdOutlineDeleteOutline
          className="cursor-pointer text-2xl text-red-600"
          onClick={() => deleteHandler(id, employeeList, dispatch)}
        />
      </td>
    </tr>
  );
};

export { EmployeeCard };
