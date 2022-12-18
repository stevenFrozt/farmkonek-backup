import React from "react"

export default function AddProductModal() {
  return (
    <div className="">
      <div className="w-3/5 h-80 bg-primary p-4 fixed -translate-x-1/2 -translate-y-1/2 inset-1/2 rounded-xl">
        {/* HEADER */}
        <div className="flex justify-between">
          <h3> Add Product</h3>
          <h3>X</h3>
        </div>
        {/* grid */}
        <div className="grid grid-cols-4">
          <div></div>
        </div>
      </div>
    </div>
  )
}
