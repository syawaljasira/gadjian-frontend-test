import React from "react";
import { FaEllipsisH } from "react-icons/fa";

const PersonnelCard = (props) => {
  const formatDate = (x) => {
    return new Date(x).toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "long",
    });
  };

  return (
    <div className="w-full md:w-3/12 flex flex-row md:flex-col items-center flex-wrap md:flex-nowrap gap-5 shadow-sm shadow-slate-400 rounded-md p-4">
      <div className="w-full flex flex-row justify-between items-center">
        <span className="w-10/12 text-sm text-ellipsis overflow-hidden whitespace-nowrap">
          Personnel ID: <span className="text-sm text-primary">{props.id}</span>
        </span>
        <FaEllipsisH className="cursor-pointer w-2/12 ml-auto text-xl text-gray-700" />
      </div>
      <div className="w-4/12 md:w-9/12 h-auto text-xs flex justify-center items-center md:mx-auto rounded-full">
        <img
          className="w-full rounded-full border-2 border-gray-400"
          src={props.avatar}
          alt="Personnel Avatar"
        />
      </div>
      <div className="w-7/12 md:w-full flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <h6 className="text-xs text-gray-600 font-semibold">Name</h6>
          <span className="text-sm text-gray-500 text-ellipsis overflow-hidden whitespace-nowrap">{`${props.firstname} ${props.lastname}`}</span>
        </div>
        <div className="flex flex-col gap-1">
          <h6 className="text-xs text-gray-600 font-semibold">Telephone</h6>
          <span className="text-sm text-gray-500 text-ellipsis overflow-hidden whitespace-nowrap">
            {props.telephone}
          </span>
        </div>
        <div className="hidden md:flex flex-col gap-1">
          <h6 className="text-xs text-gray-600 font-semibold">Birthday</h6>
          <span className="text-sm text-gray-500 text-ellipsis overflow-hidden whitespace-nowrap">
            {formatDate(props.birth_date)}
          </span>
        </div>
        <div className="hidden md:flex flex-col gap-1">
          <h6 className="text-xs text-gray-600 font-semibold">Email</h6>
          <span className="w-11/12 text-sm text-gray-500 text-ellipsis overflow-hidden whitespace-nowrap">
            {props.email}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PersonnelCard;
