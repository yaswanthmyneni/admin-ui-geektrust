import React from "react";
import { MdOutlineDeleteOutline, FaRegEdit } from "../../assets/icons/icons";

const EmployeeCard = (props) => {
  const {
    employee: { id, name, email, role },
    dispatch,
  } = props;

  return (
    <tr className="border border-t-0 border-l-0 border-r-0 border-gray-300 text-left">
      <td>
        <input type="checkbox" className="cursor-pointer" />
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
        <MdOutlineDeleteOutline className="cursor-pointer text-2xl text-red-600" />
      </td>
    </tr>
  );
};

export { EmployeeCard };
