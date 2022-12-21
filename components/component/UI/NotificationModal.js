import React, { useState } from "react";

export default function NotificationModal() {
  const [view, setView] = useState("all");

  return (
    <div className="bg-white border w-96  pb-4 rounded-3xl p-2">
      {/* buttons */}
      <div className="flex gap-2 justify-end text-sm ">
        <button
          onClick={() => setView((prev) => "all")}
          className={
            view == "all"
              ? "text-white bg-primary-500 py-1 px-2 rounded-xl"
              : "text-gray-400 hover:text-black"
          }
        >
          All
        </button>
        <button
          onClick={() => setView((prev) => "unread")}
          className={
            view == "unread"
              ? "text-white bg-primary-500  py-1 px-2 rounded-xl"
              : "text-gray-400 hover:text-black"
          }
        >
          Unread
        </button>
      </div>
      {/* New */}
      <h3 className="font-medium mb-4  ml-4">NEW</h3>
      {/* ITEM */}
      <div className="border border-blue-500 flex items-center justify-between py-4 px-6 rounded-xl cursor-pointer shadow-md">
        <div className="flex items-center gap-4">
          {/* image */}
          <div>
            <div className="bg-gray-400 w-12 h-12  border-2 border-primary-500  rounded-full"></div>
          </div>
          {/* Details */}
          <div>
            <h3 className="font-medium">Marlo Roxas</h3>
            <h4 className="truncate w-52">ordered 300kg of Kalabasa</h4>
            <h5 className="text-xs"> 2 minutes ago</h5>
          </div>
        </div>
        {/* Circle */}
        <div className="w-5 h-5 bg-blue-500 rounded-full"></div>
      </div>
      {/* Earlier */}
      <h3 className="font-medium my-4 ml-4">EARLIER</h3>
      {/* ITEM */}
      <div className=" border flex items-center justify-between py-4 px-6 rounded-xl cursor-pointer">
        <div className="flex items-center gap-4">
          {/* image */}
          <div>
            <div className="bg-gray-400 w-12 h-12  border-2 border-primary-500  rounded-full"></div>
          </div>
          {/* Details */}
          <div>
            <h3 className="font-medium">Marlo Roxas</h3>
            <h4 className="truncate w-52">ordered 300kg of Kalabasa</h4>
            <h5 className="text-xs"> 2 minutes ago</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
