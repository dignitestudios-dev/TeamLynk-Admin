import React, { useRef, useState } from "react";
import Sidebar from "./Sidebar";
import { PiCaretDown } from "react-icons/pi";
import { ProfileImage } from "../../assets/export";
import { HiMenu, HiOutlineMenuAlt2 } from "react-icons/hi";

const Layout = ({ pages }) => {
  const sidebarRef = useRef(null);
  const [isOpen, setisOpen] = useState(false);
  const toggleModal = () => {
    setisOpen(!isOpen);
  };
  return (
    <div className="w-screen h-screen flex justify-start items-start">
      <div
        onClick={toggleModal}
        className={`w-screen h-screen fixed top-0 left-0 transition-all duration-500  ${
          isOpen ? " lg:translate-x-0" : "-translate-x-full lg:translate-x-0"
        } lg:static  z-[2000] lg:z-auto px-3 lg:w-60 xl:w-72 flex flex-col gap-3 items-center justify-start py-0 lg:h-full `}
      >
        <div
          ref={sidebarRef}
          className={`fixed top-0 left-0 transition-all duration-200  ${
            isOpen ? " lg:translate-x-0" : "-translate-x-full lg:translate-x-0"
          } lg:static w-[60%] z-[2000] lg:z-auto px-3 lg:w-60 xl:w-72 flex flex-col gap-3 items-center justify-start py-0 h-full bg-white border-r border-gray-200 `}
        >
          <Sidebar />
        </div>
      </div>

      <div className="w-full relative lg:w-[calc(100%-15rem)] xl:w-[calc(100%-18rem)] h-full  overflow-y-auto overflow-x-hidden">
        <div className="sticky top-0 left-0 w-full h-16 bg-white border-b border-gray-200 flex items-center justify-between lg:justify-end px-4 z-20">
          <button onClick={()=> setisOpen((prev)=> !prev)} className="lg:hidden block"><HiOutlineMenuAlt2 className="text-2xl"/></button>
          <div className="flex gap-3 items-center  py-4 font-normal text-gray-900">
            <div className="relative bg-[#c00000]/[0.05] rounded-full h-10 w-10">
              <img
                class="h-full w-full rounded-full object-cover object-center"
                src={ProfileImage}
                alt=""
              />
            </div>
            <div className="text-sm flex flex-col justify-start items-start">
              <div className="font-semibold text-gray-700 leading-tight">
                Steven Jobs
              </div>
              <div className="text-gray-400">jobs@sailboatui.com</div>
            </div>

            {/* <button>
            <PiCaretDown />
          </button> */}
          </div>
        </div>
        <div className="w-full p-6">{pages}</div>
      </div>
    </div>
  );
};

export default Layout;
