import React, { useState } from "react"
import Button from "../UI/Button/Button"
import Disclosure from "../UI/Disclosure"
import Modal from "../UI/Modal/Modal"
import useToggle from "/hooks/useToggle"
import { AiOutlineEye } from "react-icons/ai"

export default function OrderDetailsModal() {
  const [show, toggle] = useToggle(true)
  const [selectAll, setSelectAll] = useState(false)
  const [collapseAll, setcollapseAll] = useState(false)

  return (
    <div>
      <Modal
        isOpen={show}
        toggle={toggle}
        closeButton={true}
        title="Order's Details"
      >
        {/* BODY */}
        <div>
          {/* head details */}
          <div className="flex items-center gap-12">
            <div>
              <h3 className="text-gray-500">Buyer</h3>
              <h3 className="text-secondary-500">Juan S. Darwin</h3>
            </div>
            <div>
              <h3 className="text-gray-500">Buyer ID</h3>
              <h3>000423</h3>
            </div>
            <div>
              <h3 className="text-gray-500">Order ID</h3>
              <h3>000123</h3>
            </div>
          </div>
          {/* Disclosure */}
          <div className="mt-4 ">
            <div className="flex gap-2">
              <div className="flex items-center gap-2 px-1">
                <input
                  type="checkbox"
                  id="selectAll"
                  className="cursor-pointer"
                  checked={selectAll}
                  onChange={() => setSelectAll(prev => !prev)}
                />
                <label htmlFor="selectAll" className="cursor-pointer">
                  Select All {selectAll ? "(3)" : ""}
                </label>
              </div>
              {selectAll ? (
                <>
                  <Button size={"sm"} variant="light" color="gray">
                    Deny All
                  </Button>
                  <Button size={"sm"}>Accept All</Button>
                </>
              ) : (
                ""
              )}

              <Button
                variant={"light"}
                color={"gray"}
                size={"sm"}
                onClick={() => setcollapseAll(prev => !prev)}
                className="ml-auto"
              >
                {collapseAll ? "Expand All" : "Minimize All"}
              </Button>
            </div>

            <div className="max-h-80 overflow-y-auto">
              <Disclosure
                selectAll={selectAll}
                collapseAll={collapseAll}
                setSelectAll={setSelectAll}
              />
              <Disclosure selectAll={selectAll} collapseAll={collapseAll} />
              <Disclosure selectAll={selectAll} collapseAll={collapseAll} />
            </div>
            {/* Address */}
            <div className="flex justify-between my-6 text-sm">
              <div>
                <h3 className="text-gray-500">Delivery Address</h3>
                <h3 className="font-medium">
                  San Pedro Puerto Princesa City, Palawan 5300
                </h3>
              </div>
              <div>
                <h3 className="text-gray-500">Payment Method</h3>
                <h3 className="font-medium">Cash</h3>
              </div>
            </div>
            {/* buttons */}
            <div className="flex justify-end gap-2 mt-6">
              <Button size="sm" variant="light" color="gray">
                Close
              </Button>
              <Button size="sm">Quote Order</Button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}
