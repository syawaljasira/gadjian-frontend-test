import React from "react";
import { FaBars } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import GadjianPng from "../assets/gadjian.png";
import { showSidebar } from "../store/reducer";

const Navbar = () => {
  const dispatch = useDispatch();
  const isShow = useSelector((state) => state.mainReducer.showSidebar);

  return (
    <nav className="bg-white z-30 w-full h-navbar fixed flex flex-row items-center justify-between px-5 shadow-sm shadow-slate-300">
      <div className="flex flex-row items-center gap-3 md:gap-0">
        {!isShow ? (
          <FaBars
            onClick={() => dispatch(showSidebar())}
            className={`text-gray-500 cursor-pointer md:hidden text-2xl transition-all duration-300 ease-in-out ${
              isShow ? "w-0" : "block"
            }`}
          />
        ) : (
          <HiX
            onClick={() => dispatch(showSidebar())}
            className={`text-gray-500 cursor-pointer block md:hidden text-2xl transition-all duration-300 ease-in-out ${
              !isShow ? "w-0" : "block"
            }`}
          />
        )}
        <a className="flex items-center" href="/">
          <img
            className="w-24 md:w-28 h-auto"
            src={GadjianPng}
            alt="Gadjian Logo"
          />
        </a>
      </div>
      <div className="flex flex-row items-center justify-start gap-4">
        <h6 className="hidden md:block text-md text-gray-700">
          Hallo, <span className="text-primary">Gadjian User</span>
        </h6>
        <span className="w-6 h-6 md:w-12 md:h-12 p-6 text-xs text-gray-700 rounded-full border-2 border-gray-300 flex justify-center items-center">
          Photo
          {/* Photo User Here */}
          {/* <img src="" alt="Gadjian User" /> */}
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
