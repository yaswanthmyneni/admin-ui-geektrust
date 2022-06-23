import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { CgClose } from "../../assets/icons/icons";
import { editEmployeeDetailsHandler } from "../../utility";

const EditModal = (props) => {
  const { isEditModal, dispatch, id, employeeList } = props;
  const initialState = {
    name: "",
    role: "",
    email: "",
  };
  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    if (isEditModal) {
      const employee = employeeList.find((employee) => employee.id === id);
      setFormData((prevFormData) => ({
        ...prevFormData,
        name: employee.name,
        email: employee.email,
        role: employee.role,
      }));
    }
  }, [isEditModal, employeeList, id]);
  const formList = ["name", "email", "role"];

  const handleChange = (event, setFormData) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  };

  if (!isEditModal) {
    return null;
  }

  return ReactDOM.createPortal(
    <>
      <div className="fixed inset-0 bg-slate-300 opacity-70" />
      <form
        onSubmit={(event) =>
          editEmployeeDetailsHandler(
            event,
            id,
            dispatch,
            setFormData,
            initialState,
            formData,
            employeeList
          )
        }
        className="py-6 px-8 w-72 lg:w-1/4 fixed top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 bg-white border-2 border-green-600 rounded"
      >
        <CgClose
          className="absolute top-2 right-4 cursor-pointer text-xl"
          onClick={() =>
            dispatch({ type: "SET_IS_EDIT_MODAL", payload: false })
          }
        />
        <h3 className='lg:text-xl text-center font-medium'>Edit Employee Details</h3>
        {formList.map((value) => (
          <>
            <label htmlFor={value} className='block mt-4'>
              {`${value[0].toUpperCase()}${value.slice(1)}`}:
            </label>
            <input
              type={value === "email" ? "email" : "text"}
              id={value}
              name={value}
              value={formData[value]}
              required
              className="p-1 w-full outline-0 border border-black"
              onChange={(event) => handleChange(event, setFormData)}
            />
          </>
        ))}
        <div className="mt-4 text-right">
          <button className="px-6 py-1 rounded bg-green-600 text-green-50">
            submit
          </button>
        </div>
      </form>
    </>,
    document.getElementById("portal")
  );
};

export { EditModal };
