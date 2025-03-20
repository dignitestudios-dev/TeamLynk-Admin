import React from "react";
import { styles } from "../../styles/styles";
import { FaHeart } from "react-icons/fa6";

const UserList = () => {
  return (
    <div className="w-full overflow-x-auto rounded-xl border border-gray-200 bg-white px-6 py-2 ">
      <table className="w-full border-collapse  text-left text-sm text-gray-500">
        <thead className="">
          <tr className="">
            <th
              scope="col"
              className="px-6 lg:px-4 xl:px-0 py-4 font-medium text-[#028EE6]"
            >
              Name
            </th>
            <th
              scope="col"
              className="px-6 lg:px-4 xl:px-0 py-4 font-medium text-[#028EE6]"
            >
              State
            </th>
            <th
              scope="col"
              className="px-6 lg:px-4 xl:px-0 py-4 font-medium text-[#028EE6]"
            >
              Location
            </th>

            <th
              scope="col"
              className="px-6 lg:px-4 xl:px-0 py-4 font-medium text-[#028EE6]"
            ></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 border-t border-gray-100">
          <tr className="">
            <th className="px-6 lg:px-4 xl:px-0 flex gap-3  py-4 font-normal text-gray-900">
              <div className="relative h-10 w-10">
                <img
                  className="h-full w-full rounded-full object-cover object-center"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
              </div>
              <div className="text-sm">
                <div className="font-medium text-gray-700">Steven Jobs</div>
                <div mailto:classname="text-gray-400">jobs@sailboatui.com</div>
              </div>
            </th>
            <td className="px-6 lg:px-4 xl:px-0 py-4">
              <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                Active
              </span>
            </td>
            <td className="px-6 lg:px-4 xl:px-0 py-4">Toronto, UK</td>

            <td className="px-6 lg:px-4 xl:px-0 py-4">
              <button className="w-auto px-2 h-6 bg-[#028EE6] hover:opacity-80 text-white rounded-md text-xs">
                Block
              </button>
            </td>
          </tr>
          <tr className="">
            <th className="px-6 lg:px-4 xl:px-0 flex gap-3  py-4 font-normal text-gray-900">
              <div className="relative h-10 w-10">
                <img
                  className="h-full w-full rounded-full object-cover object-center"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
              </div>
              <div className="text-sm">
                <div className="font-medium text-gray-700">Steven Jobs</div>
                <div mailto:classname="text-gray-400">jobs@sailboatui.com</div>
              </div>
            </th>
            <td className="px-6 lg:px-4 xl:px-0 py-4">
              <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                Active
              </span>
            </td>
            <td className="px-6 lg:px-4 xl:px-0 py-4">Toronto, UK</td>

            <td className="px-6 lg:px-4 xl:px-0 py-4">
              <button className="w-auto px-2 h-6 bg-[#028EE6] hover:opacity-80 text-white rounded-md text-xs">
                Block
              </button>
            </td>
          </tr>
          <tr className="">
            <th className="px-6 lg:px-4 xl:px-0 flex gap-3  py-4 font-normal text-gray-900">
              <div className="relative h-10 w-10">
                <img
                  className="h-full w-full rounded-full object-cover object-center"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
              </div>
              <div className="text-sm">
                <div className="font-medium text-gray-700">Steven Jobs</div>
                <div mailto:classname="text-gray-400">jobs@sailboatui.com</div>
              </div>
            </th>
            <td className="px-6 lg:px-4 xl:px-0 py-4">
              <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                Active
              </span>
            </td>
            <td className="px-6 lg:px-4 xl:px-0 py-4">Toronto, UK</td>

            <td className="px-6 lg:px-4 xl:px-0 py-4">
              <button className="w-auto px-2 h-6 bg-[#028EE6] hover:opacity-80 text-white rounded-md text-xs">
                Block
              </button>
            </td>
          </tr>
          <tr className="">
            <th className="px-6 lg:px-4 xl:px-0 flex gap-3  py-4 font-normal text-gray-900">
              <div className="relative h-10 w-10">
                <img
                  className="h-full w-full rounded-full object-cover object-center"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
              </div>
              <div className="text-sm">
                <div className="font-medium text-gray-700">Steven Jobs</div>
                <div mailto:classname="text-gray-400">jobs@sailboatui.com</div>
              </div>
            </th>
            <td className="px-6 lg:px-4 xl:px-0 py-4">
              <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                Active
              </span>
            </td>
            <td className="px-6 lg:px-4 xl:px-0 py-4">Toronto, UK</td>

            <td className="px-6 lg:px-4 xl:px-0 py-4">
              <button className="w-auto px-2 h-6 bg-[#028EE6] hover:opacity-80 text-white rounded-md text-xs">
                Block
              </button>
            </td>
          </tr>
          <tr className="">
            <th className="px-6 lg:px-4 xl:px-0 flex gap-3  py-4 font-normal text-gray-900">
              <div className="relative h-10 w-10">
                <img
                  className="h-full w-full rounded-full object-cover object-center"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
              </div>
              <div className="text-sm">
                <div className="font-medium text-gray-700">Steven Jobs</div>
                <div mailto:classname="text-gray-400">jobs@sailboatui.com</div>
              </div>
            </th>
            <td className="px-6 lg:px-4 xl:px-0 py-4">
              <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                Active
              </span>
            </td>
            <td className="px-6 lg:px-4 xl:px-0 py-4">Toronto, UK</td>

            <td className="px-6 lg:px-4 xl:px-0 py-4">
              <button className="w-auto px-2 h-6 bg-[#028EE6] hover:opacity-80 text-white rounded-md text-xs">
                Block
              </button>
            </td>
          </tr>
          <tr className="">
            <th className="px-6 lg:px-4 xl:px-0 flex gap-3  py-4 font-normal text-gray-900">
              <div className="relative h-10 w-10">
                <img
                  className="h-full w-full rounded-full object-cover object-center"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
              </div>
              <div className="text-sm">
                <div className="font-medium text-gray-700">Steven Jobs</div>
                <div mailto:classname="text-gray-400">jobs@sailboatui.com</div>
              </div>
            </th>
            <td className="px-6 lg:px-4 xl:px-0 py-4">
              <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                Active
              </span>
            </td>
            <td className="px-6 lg:px-4 xl:px-0 py-4">Toronto, UK</td>

            <td className="px-6 lg:px-4 xl:px-0 py-4">
              <button className="w-auto px-2 h-6 bg-[#028EE6] hover:opacity-80 text-white rounded-md text-xs">
                Block
              </button>
            </td>
          </tr>
          <tr className="">
            <th className="px-6 lg:px-4 xl:px-0 flex gap-3  py-4 font-normal text-gray-900">
              <div className="relative h-10 w-10">
                <img
                  className="h-full w-full rounded-full object-cover object-center"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
              </div>
              <div className="text-sm">
                <div className="font-medium text-gray-700">Steven Jobs</div>
                <div mailto:classname="text-gray-400">jobs@sailboatui.com</div>
              </div>
            </th>
            <td className="px-6 lg:px-4 xl:px-0 py-4">
              <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                Active
              </span>
            </td>
            <td className="px-6 lg:px-4 xl:px-0 py-4">Toronto, UK</td>

            <td className="px-6 lg:px-4 xl:px-0 py-4">
              <button className="w-auto px-2 h-6 bg-[#028EE6] hover:opacity-80 text-white rounded-md text-xs">
                Block
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
