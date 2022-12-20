import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import { RiNotification3Line } from "react-icons/ri";
import UnstyledButton from "component/UI/Button/UnstyledButton";

const MainLayout = ({ children }) => {
  return (
    <div className="bg-[#F0F2F5]">
      <Sidebar />
      <div className="pl-[16.75rem] pr-8 py-8">
        <div className="w-full bg-white px-4 py-2 rounded-2xl shadow-md border border-gray-200 flex justify-end items-center gap-4">
          <UnstyledButton className="relative">
            <RiNotification3Line className="w-6 h-6" />
            <div className="bg-warning-500 rounded-full text-[8px] flex items-center justify-center absolute top-1.5 right-1.5 w-3.5 h-3.5 text-white">
              4
            </div>
          </UnstyledButton>
          <div className="flex flex-col text-right">
            <h3 className="font-medium leading-4">John Doe</h3>
            <span className="text-xs">Sales Manager</span>
          </div>
          <div className="w-11 h-11 rounded-full bg-gray-200"></div>
        </div>
        <div className="mt-8">{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
