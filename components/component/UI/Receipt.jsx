import React from "react";
import Image from "next/image";
import ReceiptTable from "./Table/ReceiptTable";
import { TableColumn, TableHead, TableRow } from "./Table/InteractiveTable";
import { RiMapPin2Line } from "react-icons/ri";
import { IoCallOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { CiFacebook } from "react-icons/ci";
import moment from "moment";

export default function Receipt({ data }) {
  return (
    <div className="border-2 border-primary px-14 pt-8 pb-2 bg-white">
      {/* HEADER */}
      <div>
        {/* LOGO AND CUSTOMER ID */}
        <div className="flex justify-between pb-4">
          <div className="relative w-24 object-cover">
            <Image
              src="/farmkonekLogo.png"
              fill="cover"
              className="absolute"
              alt="logo"
              priority={true}
            />
          </div>
          <div>
            <div className="text-right text-sm">
              <h3 className="text-gray-500">Customer ID</h3>
              <h5 className="font-medium">{data.customerID}</h5>
            </div>
            <div className="text-right">
              <h3 className="text-gray-500">Qoutation #</h3>
              <h5 className="font-medium">{data.qoutationNumber}</h5>
            </div>
          </div>
        </div>
        {/* Customer Details */}
        <div>
          <h3 className="font-medium">FARMER ACCELERATOR PLATFORM</h3>
          <div className="py-4">
            <h2 className="text-primary font-medium">Qoutation For</h2>
            <div className="flex gap-2">
              <h3 className="text-gray-500">Customer Name: </h3>
              <h3 className="font-medium text-black">{data.customerName}</h3>
            </div>
            <div className="flex gap-2">
              <h3 className="text-gray-500">Address: </h3>
              <h3 className="font-medium text-black">{data.customerAddress}</h3>
            </div>
            <div className="flex gap-2">
              <h3 className="text-gray-500">Contact No.: </h3>
              <h3 className="font-medium text-black">{data.contactNumber}</h3>
            </div>
          </div>
        </div>
      </div>
      {/* TABLE */}
      <ReceiptTable columns={data} />
      {/* prepared by */}
      <div className="flex justify-between text-sm py-2">
        <div className="flex gap-2">
          <h3 className="text-gray-500 text-right">Prepared By: </h3>
          <h3>{data.preparedBy}</h3>
        </div>
        <div className="flex gap-2">
          <div className="text-gray-500 text-right">
            <h3>Date:</h3>
            <h3>Valid Until:</h3>
          </div>
          <div>
            <h3>{moment(data.Date).format("LL")}</h3>
            <h3>{moment(data.validDate).format("LL")}</h3>
          </div>
        </div>
      </div>
      {/* TERMS CONDITION */}
      <div className="text-sm">
        <div className="bg-primary text-white w-60 px-2">
          <h3>TERMS AND CONDITIONS</h3>
        </div>
        <div className="py-1 space-y-1 text-gray-500">
          <p>
            1. Customer will be billed after indicating acceptance of this
            quote.
          </p>
          <p> 2. Payment will be due prior to delivery of service and goods.</p>
        </div>
      </div>

      {/* FOOTER */}
      <div className="py-6 text-sm">
        <h2 className="text-primary w-max mx-auto font-medium mb-6">
          Thank you for your business!
        </h2>

        <div className="flex justify-between items-center ">
          <div className="space-y-2">
            <div className="flex items-center gap-2 ">
              <RiMapPin2Line size={"1.2rem"} />
              <h3>Barangay San Miguel 5300 Puerto Princesa, Philippines</h3>
            </div>
            <div className="flex items-center gap-2 ">
              <IoCallOutline size={"1.2rem"} />
              <h3>(639) 023 3296</h3>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 ">
              <AiOutlineMail size={"1.2rem"} />
              <h3>farmkonekph@gmail.com</h3>
            </div>
            <div className="flex items-center gap-2">
              <CiFacebook size={"1.2rem"} />
              <h3>https://www.facebook.com/FarmKonek</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
