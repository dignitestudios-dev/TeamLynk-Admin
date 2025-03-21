import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineSubscriptions } from "react-icons/md";
import { IoNotificationsOutline } from "react-icons/io5";
import { Logo } from "../../assets/export";
import { HiOutlineLogout } from "react-icons/hi";
import { LuLayoutDashboard } from "react-icons/lu";
import { LuUser } from "react-icons/lu";
import Cookies from "js-cookie";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full py-6 px-2 lg:px-10 flex flex-col items-center gap-y-6">
      <div>
        <img src={Logo} alt="logo" className="h-16" />
      </div>
      <ul className="w-full flex flex-col gap-y-2">
        <li className={`w-full border py-3 px-6 rounded-xl text-black`}>
          <Link
            to="/"
            className="text-sm flex items-center gap-3 font-medium w-full"
          >
            <LuLayoutDashboard className="text-lg" /> Dashboard
          </Link>
        </li>
        <li className="py-3 px-6 border rounded-xl w-full">
          <Link
            to="/users"
            className="text-sm flex items-center gap-3 font-medium w-full"
          >
            <LuUser className="text-lg" /> Users
          </Link>
        </li>
        <li className="py-3 px-6 border rounded-xl w-full">
          <Link
            to="/subscriptions"
            className="text-sm flex items-center gap-3 font-medium w-full"
          >
            <MdOutlineSubscriptions className="text-lg" /> Subscriptions
          </Link>
        </li>
        <li className="py-3 px-6 border rounded-xl w-full">
          <Link
            to="/notifications"
            className="text-sm flex items-center gap-3 font-medium w-full"
          >
            <IoNotificationsOutline className="text-lg" /> Notifications
          </Link>
        </li>
        <li className={`w-full border py-3 px-6 rounded-xl text-white`}>
          <button
            onClick={() => {
              Cookies.remove("token");
              navigate("/login");
            }}
            className="text-sm font-medium w-full flex items-center gap-3 text-black"
          >
            <HiOutlineLogout className="text-lg" /> Logout
          </button>
        </li>
      </ul>
      {/* <div className="">
        <button className="text-sm font-medium flex items-center gap-2 text-red-600"><HiOutlineLogout className="text-lg"/> Logout</button>
      </div> */}
    </div>
  );
};

export default Sidebar;
