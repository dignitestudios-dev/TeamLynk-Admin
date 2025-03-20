import React from "react";
import { styles } from "../../styles/styles";

const Filter = () => {
  return (
    <div class="w-full rounded-xl border border-gray-200 bg-white p-6 ">
      <h2 class="text-stone-700 text-xl font-bold">Apply filters</h2>
      <p class="mt-1 text-sm">Use filters to further refine search</p>
      <div class="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div class="flex flex-col">
          <label htmlFor="name" class="text-stone-600 text-sm font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="John Smith"
            className="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-[#028EE6] focus:ring focus:ring-blue-200 focus:ring-opacity-50 text-sm text-stone-600"
          />
        </div>

        <div class="flex flex-col">
          <label htmlFor="manufacturer" class="text-stone-600 text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="manufacturer"
            placeholder="john@gmail.com"
            className="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-[#028EE6] focus:ring focus:ring-blue-200 focus:ring-opacity-50 text-sm"
          />
        </div>

        <div class="flex flex-col">
          <label htmlFor="date" class="text-stone-600 text-sm font-medium">
            Date
          </label>
          <input
            type="date"
            id="date"
            className="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-[#028EE6] focus:ring focus:ring-blue-200 focus:ring-opacity-50 text-sm"
          />
        </div>

        <div class="flex flex-col">
          <label htmlFor="status" class="text-stone-600 text-sm font-medium">
            Status
          </label>

          <select
            id="status"
            className="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-[#028EE6] focus:ring focus:ring-blue-200 focus:ring-opacity-50 text-sm"
          >
            <option>All</option>
            <option>Active</option>
            <option>Ghost</option>
          </select>
        </div>
      </div>

      <div class="mt-6 grid w-full grid-cols-2 justify-end space-x-4 md:flex">
        <button class="active:scale-95 rounded-md bg-gray-50 px-8 py-2 font-medium text-black outline-none focus:ring hover:opacity-90">
          Reset
        </button>
        <button class={`active:scale-95 rounded-md px-8 py-2 font-medium text-white outline-none focus:ring focus:ring-blue-200 hover:opacity-90 ${styles.blueBg}`}>
          Search
        </button>
      </div>
    </div>
  );
};

export default Filter;
