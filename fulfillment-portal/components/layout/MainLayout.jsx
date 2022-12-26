import React from "react"
import Sidebar from "./Sidebar/Sidebar"
import useToggle from "/hooks/useToggle"
import NotificationButton from "../UI/Button/NotificationButton"

const MainLayout = ({ children }) => {
  const [show, toggle] = useToggle()
  return (
    <div className="bg-[#ffffff] relative">
      <Sidebar />
      <div className="pl-[16.75rem] pr-8 py-8">
        <div className="w-full bg-white px-4 py-2 rounded-2xl shadow-md border border-gray-200 flex justify-end items-center gap-4">
          <NotificationButton />
          <div className="flex flex-col text-right">
            <h3 className="font-medium leading-4">John Doe</h3>
            <span className="text-xs">Sales Manager</span>
          </div>
          <div className="w-11 h-11 rounded-full bg-gray-200"></div>
        </div>
        <div className="mt-8">{children}</div>
      </div>
    </div>
  )
}

export default MainLayout
