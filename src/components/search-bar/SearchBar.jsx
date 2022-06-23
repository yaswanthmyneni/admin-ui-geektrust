import React from "react";

const SearchBar = ({ searchValue, dispatch }) => {
  return (
    <section className="search-bar my-2">
      <input
        type="text"
        className="w-full px-2 py-1 border-2 border-slate-300"
        placeholder="Search by name, email or role"
        value={searchValue}
        onChange={(event) => {
          dispatch({ type: "SET_SEARCH_VALUE", payload: event.target.value });
        }}
      />
    </section>
  );
};

export { SearchBar };
