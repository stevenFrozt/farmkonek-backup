import React, { useEffect, useState } from "react"
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai"
import Button from "./Button/Button"
import useToggle from "/hooks/useToggle"

export default function Disclosure({ selectAll, collapseAll, setSelectAll }) {
  const [show, toggle] = useState(true)
  const [checkbox, setCheckbox] = useState(false)

  useEffect(() => {
    if (collapseAll) {
      toggle(prev => false)
    } else {
      toggle(prev => true)
    }
  }, [collapseAll])
  return (
    <div className="bg-secondary-100/40 px-1  rounded-sm my-4">
      <div className="flex items-center gap-2 py-1">
        <input
          type="checkbox"
          id="selectAll"
          className="cursor-pointer self-start mt-2"
          checked={selectAll ? selectAll : checkbox}
          onChange={() => {
            selectAll ? setSelectAll(prev => !prev) : setCheckbox(prev => !prev)
          }}
        />
        <div className={show ? "grid grid-cols-5 text-gray-500" : ""}>
          {show ? (
            <>
              <div>Product</div>
              <div>Variety</div>
              <div>Volume</div>
              <div>Unit</div>
              <div>Date neeeded</div>
            </>
          ) : (
            "Squash (Kalabasa) / any / 20kg / Dec 3, 2022 "
          )}
        </div>
        <button className="ml-auto" onClick={() => toggle(prev => !prev)}>
          {show ? <AiOutlineMinusSquare /> : <AiOutlinePlusSquare />}
        </button>
      </div>

      <div className={show ? "" : "hidden"}>
        {/* Items */}
        <div className="flex items-center gap-2 py-2">
          <input type="checkbox" id="selectAll" className="invisible" />
          <div className="grid grid-cols-5">
            <div className="text-black">Product</div>
            <div className="text-black">Variety</div>
            <div className="text-black">Volume</div>
            <div className="text-black">Unit</div>
            <div className="text-black">Date neeeded</div>
          </div>
          <button className="invisible">
            <AiOutlineMinusSquare />
          </button>
        </div>

        <div className="flex py-1 my-4 justify-between">
          {/* note */}
          <div>
            <h3 className="text-gray-500 pl-5">Note</h3>
            <p className="bg-red-400/90 px-4 py-1 rounded-md text-white max-w-1/2 text-sm">
              Remarks: Denied due to no available crops
            </p>
          </div>
          {/* action buttons */}
          <div className="flex self-end gap-1 ">
            <Button
              size="sm"
              variant="subtle"
              color="gray"
              className="bg-transparent border-none"
            >
              Deny Order
            </Button>
            <Button size="sm" className="border-none">
              Accept Order
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
