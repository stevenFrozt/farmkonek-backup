import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import Image from "next/image";
export default function NotificationBar() {
  return (
    <div className="bg-white p-4 flex justify-between rounded-3xl border">
      {/* notififcation area */}
      <div></div>

      {/* profile Area */}
      <div className="flex items-center gap-4">
        {/* Notification Button */}
        <div className="relative cursor-pointer ">
          <IoMdNotificationsOutline className="w-9 h-9" />
          <div className="absolute rounded-full bg-red-500 text-white w-5 h-5 text-sm flex items-center justify-center top-0 right-0 ">
            5
          </div>
        </div>
        {/* Name and Status */}
        <div>
          <h3 className="font-medium">John Doe</h3>
          <h4 className="text-gray-400">Sales Manager</h4>
        </div>
        {/* Image profile */}
        <div className="relative object-contain w-14 h-14 rounded-full bg-gray-200 overflow-hidden cursor-pointer">
          {/* <Image
            src="/farmkonekLogo.png"
            alt="tt"
            fill="cover"
            className="absolute"
          /> */}
        </div>
      </div>
    </div>
  );
}
