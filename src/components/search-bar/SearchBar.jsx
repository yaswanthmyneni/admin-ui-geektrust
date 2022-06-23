import React from "react";

const SearchBar = () => {
  return (
    <section className="search-bar my-2">
      <input
        type="text"
        className="w-full px-2 py-1 border-2 border-slate-300"
        placeholder="Search by name, email or role"
      />
    </section>
  );
};

export { SearchBar };
