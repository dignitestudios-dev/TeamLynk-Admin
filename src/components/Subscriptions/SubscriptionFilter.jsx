import React from 'react'
import {styles} from "../../styles/styles"

const SubscriptionFilter = () => {
  return (
    <div class="w-full rounded-xl border border-gray-200 bg-white p-6 shadow-lg">
    <h2 class="text-stone-700 text-xl font-bold">Apply filters</h2>
    <p class="mt-1 text-sm">Use filters to further refine search</p>
    <div class="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <div class="flex flex-col">
        <label for="name" class="text-stone-600 text-sm font-medium">
          Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="John Smith"
          class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-[#c00000] focus:ring focus:ring-red-200 focus:ring-opacity-50"
        />
      </div>

      <div class="flex flex-col">
        <label for="manufacturer" class="text-stone-600 text-sm font-medium">
          Email
        </label>
        <input
          type="email"
          id="manufacturer"
          placeholder="john@gmail.com"
          class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-[#c00000] focus:ring focus:ring-red-200 focus:ring-opacity-50"
        />
      </div>

      <div class="flex flex-col">
        <label for="date" class="text-stone-600 text-sm font-medium">
          Date of Registration
        </label>
        <input
          type="date"
          id="date"
          class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-[#c00000] focus:ring focus:ring-red-200 focus:ring-opacity-50"
        />
      </div>

      <div class="flex flex-col">
        <label for="status" class="text-stone-600 text-sm font-medium">
          Status
        </label>

        <select
          id="status"
          class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-[#c00000] focus:ring focus:ring-red-200 focus:ring-opacity-50"
        >
          <option>Active</option>
          <option>Closed</option>
        </select>
      </div>
    </div>

    <div class="mt-6 grid w-full grid-cols-2 justify-end space-x-4 md:flex">
      <button class="active:scale-95 rounded-lg bg-gray-50 px-8 py-2 font-medium text-black outline-none focus:ring hover:opacity-90">
        Reset
      </button>
      <button class={`active:scale-95 rounded-lg px-8 py-2 font-medium text-white outline-none focus:ring focus:ring-red-200 hover:opacity-90 ${styles.blueBg}`}>
        Search
      </button>
    </div>
  </div>
  )
}

export default SubscriptionFilter
