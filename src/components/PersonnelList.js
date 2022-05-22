import React, { Fragment, useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaPlus,
  FaSearch,
} from "react-icons/fa";
import PersonnelCard from "./PersonnelCard";
import { default as api } from "../store/apiSlice";

const PersonnelList = () => {
  const { data, isSuccess, isFetching, isError } =
    api.useGetPersonnelListQuery();
  const [currentPage, setCurrentPage] = useState(1);
  const dataLimit = 4;
  const dataMaxLimit = isSuccess ? data.results.length : 28;

  const handleNextPage = () => {
    setCurrentPage((page) => page + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((page) => page - 1);
  };

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data.results.slice(startIndex, endIndex);
  };

  return (
    <main className="w-11/12 md:w-9/12 flex flex-col mx-auto">
      {/* Personnel List Header */}
      <div className="w-full flex flex-col items-start md:flex-row md:justify-between md:items-center p-6">
        <div className="flex flex-col ">
          <h1 className="text-3xl md:text-2xl text-primary font-bold">
            PERSONNEL LIST
          </h1>
          <p className="text-lg text-gray-500">List of all personnels</p>
        </div>
        <div className="flex flex-col gap-2 pt-2 md:pt-0 md:flex-row md:gap-3">
          <span className="w-full p-2 flex flex-row justify-between items-center gap-2 border-2 border-gray-200 rounded-sm md:w-auto md:justify-start">
            <FaSearch className="text-xl md:text-lg text-primary" />
            <input
              className="text-md md:text-sm"
              type="text"
              placeholder="Find Personnels"
            />
          </span>
          <button className="w-full md:w-auto p-2 md:p-3 bg-primary flex flex-row justify-between items-center gap-2 border-0 rounded-sm md:justify-start">
            <span className="text-white text-md md:text-sm">ADD PERSONNEL</span>
            <FaPlus className="text-lg md:text-md text-white" />
          </button>
        </div>
      </div>

      {/* Personnel List Main */}
      <div className="w-full space-y-4 md:space-y-0 md:space-x-3 flex flex-wrap md:flex-nowrap flex-row p-6">
        {isSuccess ? (
          getPaginatedData().map((item, index) => {
            return (
              <Fragment key={index}>
                <PersonnelCard
                  id={item.login.salt}
                  avatar={item.picture.large}
                  firstname={item.name.first}
                  lastname={item.name.last}
                  telephone={item.phone}
                  birth_date={item.dob.date}
                  email={item.email}
                />
              </Fragment>
            );
          })
        ) : (
          <div className="w-full text-center">
            <svg
              role="status"
              className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
          </div>
        )}
      </div>

      {/* Personnel List Footer */}
      <div className="w-full flex flex-row justify-center items-center gap-12 py-5">
        <button
          disabled={currentPage === 1 ? true : false}
          onClick={handlePreviousPage}
          className="flex flex-row items-center gap-1"
        >
          <FaChevronLeft
            className={`text-md ${
              currentPage === 1 ? "text-gray-400" : "text-gray-600"
            }`}
          />
          <span
            className={`text-sm ${
              currentPage === 1 ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Previous Page
          </span>
        </button>
        <button
          disabled={currentPage === dataMaxLimit / 4 ? true : false}
          onClick={handleNextPage}
          className="flex flex-row items-center gap-1"
        >
          <span
            className={`text-sm ${
              currentPage === dataMaxLimit / 4
                ? "text-gray-400"
                : "text-gray-600"
            }`}
          >
            Next Page
          </span>
          <FaChevronRight
            className={`text-md ${
              currentPage === dataMaxLimit / 4
                ? "text-gray-400"
                : "text-gray-600"
            }`}
          />
        </button>
      </div>
    </main>
  );
};

export default PersonnelList;
