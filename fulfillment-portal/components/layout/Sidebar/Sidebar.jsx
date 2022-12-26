import React from "react"
import Image from "next/image"
import Logo from "/public/images/logo.png"
import NavLink from "./NavLink"
import DisplayTimeDate from "./DiplayTimeDate"

const Sidebar = () => {
  return (
    <div className="flex flex-col w-[14.75rem] bg-white fixed top-0 bottom-0 left-0 shadow-xl border-r">
      <div className="p-6 flex flex-col justify-center items-center gap-6 mt-10">
        <Image src={Logo} alt="FarmKonek Logo" className="w-24" />
        <ul className="w-full flex flex-col gap-2">
          <NavLink href="/">Dashboard</NavLink>
          <NavLink href="/orders">Orders</NavLink>
          <NavLink href="/qoutation">Qoutations</NavLink>
          <NavLink href="/price_settings">Price Settings</NavLink>
        </ul>
      </div>
      <DisplayTimeDate />
    </div>
  )
}

export default Sidebar
