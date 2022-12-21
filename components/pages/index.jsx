import { useState } from "react";

import ButtonsDesign from "component/designSystem/ButtonsDesign";
import InputFieldsDesign from "component/designSystem/InputFieldsDesign";
import ModalDesign from "component/designSystem/ModalDesign";
import TableDesign from "component/designSystem/TableDesign";
import Receipt from "component/UI/Receipt";
import SelectFieldDesign from "component/designSystem/SelectFieldDesign";
import receiptData from "../data/receiptData1.json";
import NotificationBar from "component/UI/NotificationBar";
import NotificationModal from "component/UI/NotificationModal";
import SummaryCard from "component/UI/Cards/SummaryCard";
export default function Home() {
  return (
    <div className="p-10">
      <div className="flex flex-col gap-10">
        <ButtonsDesign />
        <InputFieldsDesign />
        <ModalDesign />
        <TableDesign />
        <SelectFieldDesign />
        <SummaryCard />

        <Receipt data={receiptData[0]} />
        <NotificationBar />
        <NotificationModal />
      </div>
    </div>
  );
}
