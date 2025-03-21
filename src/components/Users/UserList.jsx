import React from "react";
import { styles } from "../../styles/styles";
import { FaHeart } from "react-icons/fa6";

const UserList = ({ onBlockClick, users }) => {
  function formatUSPhoneNumber(phoneNumber) {
    // Remove all non-digit characters
    const cleaned = phoneNumber.replace(/\D/g, "");

    // Check if the number has 10 digits
    if (cleaned.length >= 10) {
      const areaCode = cleaned.slice(0, 3);
      const centralOffice = cleaned.slice(3, 6);
      const lineNumber = cleaned.slice(6, 10);

      return `+1 (${areaCode})-${centralOffice}-${lineNumber}`;
    }
    // If the number isn't 10 digits, return the original input
    return phoneNumber;
  }
  return (
    <div className="w-full overflow-x-auto rounded-xl border border-gray-200 bg-white px-6 py-2 ">
      {users?.length <= 0 ? (
        <span>No users found</span>
      ) : (
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
                Phone Number
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
              ></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            {users?.map((user, key) => {
              return (
                <tr key={key} className="">
                  <th className="px-6 lg:px-4 xl:px-0 flex items-center gap-3  py-4 font-normal text-gray-900">
                    <div className="relative h-10 w-10">
                      <img
                        className="h-full w-full rounded-full object-cover object-center"
                        src={
                          user?.avatar
                            ? `https://api.teamlynk.net/${user?.avatar}`
                            : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                        }
                        alt=""
                      />
                    </div>
                    <div className="text-sm">
                      <div className="font-medium text-gray-700">
                        {user?.name}
                      </div>
                    </div>
                  </th>
                  <td className="px-6 lg:px-4 xl:px-0 py-4">
                    <a
                      href={`tel:${user?.phone_number}`}
                      classname="text-gray-400"
                    >
                      {formatUSPhoneNumber(user?.phone_number)}
                    </a>
                  </td>
                  <td className="px-6 lg:px-4 xl:px-0 py-4">
                    {!user?.is_blocked ? (
                      <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                        <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                        Active
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 rounded-full bg-red-50 px-2 py-1 text-xs font-semibold text-red-600">
                        <span className="h-1.5 w-1.5 rounded-full bg-red-600"></span>
                        Inactive
                      </span>
                    )}
                  </td>

                  <td className="px-6 lg:px-4 xl:px-0 py-4">
                    <button
                      onClick={() => onBlockClick(user)}
                      className="w-auto px-2 h-6 bg-[#028EE6] hover:opacity-80 text-white rounded-md text-xs"
                    >
                      {user?.is_blocked ? "Unblock" : "Block"}
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserList;
