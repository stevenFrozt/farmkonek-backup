import React from "react";

export default function ReceiptTable({ columns }) {
  console.log(columns);
  return (
    <div className="border-2 border-primary bg-primary">
      {/* TABLE HEADER */}
      <div className="grid grid-cols-5 w-full bg-primary text-white text-center py-2">
        <h3>Product</h3>
        <h3>Variety</h3>
        <h3>Volume</h3>
        <h3>Unit</h3>
        <h3>Amount</h3>
      </div>
      {/* TABLE BODY */}
      <div className="bg-white border-b">
        {columns.orders.map((item, index) => {
          return (
            <div
              className="grid grid-cols-5 w-full text-center border py-2 items-center"
              key={index}
            >
              <h3 className="p-1">{item.Product}</h3>
              <h3 className="p-1">{item.Variety}</h3>
              <h3 className="p-1">{item.Volume}</h3>
              <h3 className="p-1">{item.Unit}</h3>
              <h3 className="p-1">₱ {item.Amount}</h3>
            </div>
          );
        })}
      </div>
      {/* Summary */}
      <div className="flex justify-end pr-12 py-4 bg-white gap-4">
        {/* labels */}
        <div className="text-gray-400 text-right">
          <h3>Subtotal: </h3>
          <h3>Shipping Fee: </h3>
          <h3>Convenience Fee: </h3>
          <h3 className="font-medium text-black">Total: </h3>
        </div>
        {/* Totals */}
        <div>
          <h3>₱0.00</h3>
          <h3>₱0.00</h3>
          <h3>₱0.00</h3>
          <h3 className="font-medium">₱0.00</h3>
        </div>
      </div>
    </div>
  );
}
