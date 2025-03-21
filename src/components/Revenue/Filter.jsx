import React from "react";
import { styles } from "../../styles/styles";

const Filter = ({ filters, onSearch, onStatusChange, onReset }) => {
  const handleSearchChange = (e) => {
    onSearch(e.target.value);
  };

  const handleStatusChange = (e) => {
    onStatusChange(e.target.value);
  };

  const handleSearch = () => {
    // The search is already happening on change, but keeping the button for UI consistency
    return;
  };

  return (
    <div className="w-full rounded-xl border border-gray-200 bg-white p-6">
      <h2 className="text-stone-700 text-xl font-bold">Apply filters</h2>
      <p className="mt-1 text-sm">Use filters to further refine search</p>
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-end justify-between">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-stone-600 text-sm font-medium">
            Search
          </label>
          <input
            type="text"
            id="name"
            value={filters.search}
            onChange={handleSearchChange}
            placeholder="Search by name or phone number"
            className="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-[#028EE6] focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="status"
            className="text-stone-600 text-sm font-medium"
          >
            Status
          </label>

          <select
            id="status"
            value={filters.status}
            onChange={handleStatusChange}
            className="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-[#028EE6] focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          >
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>

        <div className="grid w-full grid-cols-2 col-span-2 justify-end space-x-4 md:flex">
          <button
            onClick={onReset}
            className="active:scale-95 rounded-lg bg-gray-50 px-8 h-10 font-medium text-black outline-none focus:ring hover:opacity-90"
          >
            Reset
          </button>
          <button
            onClick={handleSearch}
            className={`active:scale-95 rounded-lg px-8 h-10 font-medium text-white outline-none focus:ring focus:ring-blue-200 hover:opacity-90 ${styles.blueBg}`}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
