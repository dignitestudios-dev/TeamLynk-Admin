import React, { useState } from "react";
// import { Notification } from "../assets/export";
import { IoSearchOutline } from "react-icons/io5";
import NotificationCreateModal from "./NotificationCreateModal";
import { NotificationBell } from "../../assets/export";
// import NotificationCreateModal from "../components/notifications/NotificationCreateModal";

const Notification = () => {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  return (
    <div className="w-full flex flex-col justify-start items-start gap-6">
      <div className="w-full h-auto flex justify-between items-center">
        <div className="w-96 relative">
          <input
            type="text"
            placeholder="Search"
            className="w-full text-sm h-10 rounded-md px-3 outline-none border border-gray-200 text-gray-700"
          />
          <button className="w-8 h-8 absolute top-1 right-1 rounded-full text-md text-black flex items-center justify-center">
            <IoSearchOutline className="text-xl"/>
          </button>
        </div>
        <button
          onClick={() => setIsNotificationOpen(true)}
          className="w-32 h-10 rounded-md bg-[#028EE6] text-white text-sm font-medium"
        >
          Send New
        </button>
      </div>
      <div className="w-full h-auto grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="flex rounded-md border border-gray-200 p-4 text-left text-gray-600  sm:p-4">
          <img
            className="mr-2 block h-16 w-16 max-w-full text-left align-middle sm:h-20 sm:w-20"
            src={NotificationBell}
            alt="Profile Picture"
          />
          <div class="w-full text-left">
            <div class="mb-2 flex flex-col justify-between text-gray-600 sm:flex-row pt-2">
              <h3 class="font-medium">Title of Notification</h3>
              <time class="text-xs" datetime="2022-11-13T20:00Z">
                July 18, 2022 at 10:36 AM
              </time>
            </div>
            <p class="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit!
            </p>
          </div>
        </div>
        <div class=" flex  rounded-md border border-gray-200 p-4 text-left text-gray-600  sm:p-4">
          <img
            className="mr-2 block h-16 w-16 max-w-full text-left align-middle sm:h-20 sm:w-20"
            src={NotificationBell}
            alt="Profile Picture"
          />
          <div class="w-full text-left">
            <div class="mb-2 flex flex-col justify-between text-gray-600 sm:flex-row">
              <h3 class="font-medium">Title of Notification</h3>
              <time class="text-xs" datetime="2022-11-13T20:00Z">
                July 18, 2022 at 10:36 AM
              </time>
            </div>
            <p class="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit!
            </p>
          </div>
        </div>
        <div class=" flex  rounded-md border border-gray-200 p-4 text-left text-gray-600  sm:p-4">
          <img
            className="mr-2 block h-16 w-16 max-w-full text-left align-middle sm:h-20 sm:w-20"
            src={NotificationBell}
            alt="Profile Picture"
          />
          <div class="w-full text-left">
            <div class="mb-2 flex flex-col justify-between text-gray-600 sm:flex-row">
              <h3 class="font-medium">Title of Notification</h3>
              <time class="text-xs" datetime="2022-11-13T20:00Z">
                July 18, 2022 at 10:36 AM
              </time>
            </div>
            <p class="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit!
            </p>
          </div>
        </div>
        <div class=" flex  rounded-md border border-gray-200 p-4 text-left text-gray-600  sm:p-4">
          <img
            className="mr-2 block h-16 w-16 max-w-full text-left align-middle sm:h-20 sm:w-20"
            src={NotificationBell}
            alt="Profile Picture"
          />
          <div class="w-full text-left">
            <div class="mb-2 flex flex-col justify-between text-gray-600 sm:flex-row">
              <h3 class="font-medium">Title of Notification</h3>
              <time class="text-xs" datetime="2022-11-13T20:00Z">
                July 18, 2022 at 10:36 AM
              </time>
            </div>
            <p class="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit!
            </p>
          </div>
        </div>
      </div>
      <NotificationCreateModal
        isOpen={isNotificationOpen}
        setIsOpen={setIsNotificationOpen}
      />
    </div>
  );
};

export default Notification;
