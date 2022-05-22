import React from "react";
import { FaHome, FaUsers, FaRegCalendarAlt } from "react-icons/fa";
import { useSelector } from "react-redux";

const Sidebar = (props) => {
  const isShow = useSelector((state) => state.mainReducer.showSidebar);

  return (
    <aside
      className={`block z-20 fixed bg-white w-8/12 h-screen transition-all duration-300 ease-in-out md:static md:w-1/5 md:h-sidebar shadow-sm shadow-slate-300 ${
        isShow ? "left-0" : "-left-64"
      }`}
    >
      <nav className="flex flex-col gap-3 p-4">
        <a className="flex flex-row items-center gap-3" href="/">
          <FaHome
            className={`text-lg ${
              props.activeClass === "dashboard"
                ? "text-primary"
                : "text-gray-700"
            }`}
          />
          <span
            className={`${
              props.activeClass === "dashboard"
                ? "text-primary"
                : "text-gray-700"
            }"`}
          >
            Beranda
          </span>
        </a>
        <a className="flex flex-row items-center gap-3" href="/">
          <FaUsers
            className={`text-lg ${
              props.activeClass === "personel_list"
                ? "text-primary"
                : "text-gray-700"
            }`}
          />
          <span
            className={`${
              props.activeClass === "personel_list"
                ? "text-primary"
                : "text-gray-700"
            }`}
          >
            Personnel List
          </span>
        </a>
        <a className="flex flex-row items-center gap-3" href="/">
          <FaRegCalendarAlt
            className={`text-lg ${
              props.activeClass === "daily_attendance"
                ? "text-primary"
                : "text-gray-700"
            }`}
          />
          <span
            className={`${
              props.activeClass === "daily_attendance"
                ? "text-primary"
                : "text-gray-700"
            }"`}
          >
            Daily Attendance
          </span>
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;
