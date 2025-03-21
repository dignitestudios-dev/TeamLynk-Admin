import React from "react";
import { styles } from "../../styles/styles";

const Filter = ({ filters, onSearch, onStatusFilter }) => {
  const handleSearchChange = (e) => {
    onSearch(e.target.value);
  };

  const handleStatusChange = (e) => {
    onStatusFilter(e.target.value);
  };

  const handleReset = () => {
    onSearch("");
    onStatusFilter("All");
  };

  return (
    <div className="w-full rounded-xl border border-gray-200 bg-white p-6">
      <h2 className="text-stone-700 text-xl font-bold">Apply filters</h2>
      <p className="mt-1 text-sm">Use filters to further refine search</p>
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 items-end">
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
            className="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-[#028EE6] focus:ring focus:ring-blue-200 focus:ring-opacity-50 text-sm text-stone-600"
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
            className="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-[#028EE6] focus:ring focus:ring-blue-200 focus:ring-opacity-50 text-sm"
          >
            <option value="all">All</option>
            <option value="blocked">Blocked</option>
            <option value="unblocked">Unblocked</option>
          </select>
        </div>
        <div className="grid w-auto grid-cols-2 justify-end space-x-2 md:flex">
          <button
            onClick={handleReset}
            className="active:scale-95 rounded-md bg-gray-50 px-8 flex items-center justify-center h-10 font-medium text-black outline-none focus:ring hover:opacity-90"
          >
            Reset
          </button>
          <button
            onClick={() => fetchUsers()}
            className={`active:scale-95 rounded-md px-8 flex items-center justify-center h-10 font-medium text-white outline-none focus:ring focus:ring-blue-200 hover:opacity-90 ${styles.blueBg}`}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
