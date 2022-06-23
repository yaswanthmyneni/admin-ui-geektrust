import React from "react";
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  MdKeyboardArrowRight,
  MdKeyboardArrowLeft,
} from "../../assets/icons/icons";

function NavigationBottom(props) {
  const { currentPage, dispatch, pages, deleteSelectedEntires } = props;

  return (
    <section className="page-navigation flex flex-wrap gap-2 justify-between items-center">
      <ul className="my-8 flex flex-wrap gap-4 items-center justify-center">
        <FaAngleDoubleLeft
          className="text-3xl cursor-pointer border-2 border-black rounded-md"
          onClick={() =>
            currentPage !== 1 &&
            dispatch({ type: "SET_CURRENT_PAGE", payload: 1 })
          }
        />
        <MdKeyboardArrowLeft
          className="text-3xl cursor-pointer border-2 border-black rounded-md"
          onClick={() =>
            currentPage !== 1 && dispatch({ type: "DECREMENT_CURRENT_PAGE" })
          }
        />

        {pages.map((pageNumber) => {
          return (
            <li
              key={pageNumber}
              className={`px-4 cursor-pointer ${
                currentPage === pageNumber ? "bg-green-500" : null
              } border-2 border-black rounded-full`}
              onClick={() =>
                dispatch({ type: "SET_CURRENT_PAGE", payload: pageNumber })
              }
            >
              {pageNumber}
            </li>
          );
        })}

        <MdKeyboardArrowRight
          className="text-3xl cursor-pointer border-2 border-black rounded-md"
          onClick={() =>
            currentPage !== pages[pages.length - 1] &&
            dispatch({ type: "INCREMENT_CURRENT_PAGE" })
          }
        />
        <FaAngleDoubleRight
          className="text-3xl cursor-pointer border-2 border-black rounded-md"
          onClick={() =>
            currentPage !== 5 &&
            dispatch({
              type: "SET_CURRENT_PAGE",
              payload: pages[pages.length - 1],
            })
          }
        />
      </ul>
      <button
        className="px-4 py-1 h-fit rounded text-white bg-red-500"
        onClick={deleteSelectedEntires}
      >
        delete selected
      </button>
    </section>
  );
}

export { NavigationBottom };
