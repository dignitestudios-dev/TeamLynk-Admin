import React, { useContext, useRef, useState } from "react";
// import axios from "axios";
// import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const NotificationCreateModal = ({ isOpen, setIsOpen }) => {
  const notificationCreateRef = useRef();
  const navigate = useNavigate();

  const toggleModal = (e) => {
    if (!notificationCreateRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  return (
    <div
      onClick={(e) => toggleModal(e)}
      className={`w-screen h-screen flex p-2 items-center justify-center fixed top-0 left-0 z-[1000] transition-all duration-500 ${
        isOpen ? "scale-100 blur-none" : "scale-0 blur-md"
      }`}
    >
      <div
        ref={notificationCreateRef}
        className="w-[30rem] h-auto shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md bg-white py-2 flex flex-col gap-2"
      >
        <div className="w-full border-b border-gray-200 h-12 flex items-center justify-center">
          <h1 className="text-xl font-bold">Send Notification</h1>
        </div>
        <form className="w-full my-4 h-auto flex flex-col justify-start items-start px-4 gap-3">
          <div className="w-full h-auto flex flex-col gap-[2px] justify-start items-start ">
            <label className="text-sm font-medium text-gray-900">
              Title
            </label>
            <input
              type="text"
              placeholder="e.g. Backend Developer | 3+ Years experience"
              className="w-full h-12 rounded-md px-4 outline-none focus:border-gray-300 border border-gray-200 text-sm"
            />
          </div>

          <div className="w-full h-auto flex flex-col gap-[2px] justify-start items-start ">
            <label className="text-sm font-medium text-gray-900">
              Message
            </label>
            <textarea
              type="text"
              placeholder="Our app is getting a new look this weekend!"
              className="w-full h-32 resize-none rounded-md p-3 outline-none focus:border-gray-300 border border-gray-200 text-sm"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full h-12 rounded-md flex justify-center items-center text-white font-medium bg-[#028EE6] hover:opacity-90 transition-all duration-200"
          >
            {"Send Notification"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default NotificationCreateModal;
