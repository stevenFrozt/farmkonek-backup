import React from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import { RiDashboardLine, RiMoonLine } from "react-icons/ri"
import { BsBookmark } from "react-icons/bs"
import { MdOutlinePriceChange } from "react-icons/md"
import { IoPricetagsOutline } from "react-icons/io5"

const Icons = {
  "/": <RiDashboardLine />,
  "/test": <RiMoonLine />,
  "/orders": <BsBookmark />,
  "/qoutation": <MdOutlinePriceChange />,
  "/price_settings": <IoPricetagsOutline />
}

const NavLink = ({ href = "", children }) => {
  const router = useRouter()
  const baseRouter = href.split("/")[1]
  const currentURL = router.pathname.split("/")[1]
  const isActive = router.asPath === href || currentURL === baseRouter

  return (
    <Link href={href}>
      <li
        className={`flex items-center gap-3 h-[2.875rem] w-full rounded-xl cursor-pointer text-left px-5 ${
          isActive
            ? "bg-primary-500 text-white hover:bg-primary-600"
            : "bg-[#F0F2F5] text-neutral-500 hover:text-primary-500"
        }`}
      >
        <span
          className={`[&>*]:w-5 [&>*]:h-5 ${
            isActive ? "[&>*]:text-white" : "[&>*]:text-inherit"
          }`}
        >
          {Icons[href]}
        </span>

        <span>{children}</span>
      </li>
    </Link>
  )
}

export default NavLink
