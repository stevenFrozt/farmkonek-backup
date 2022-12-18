import { useState } from "react";

import ButtonsDesign from "component/designSystem/ButtonsDesign";
import InputFieldsDesign from "component/designSystem/InputFieldsDesign";
import ModalDesign from "component/designSystem/ModalDesign";
import TableDesign from "component/designSystem/TableDesign";
import SelectFieldDesign from "component/designSystem/SelectFieldDesign";

export default function Home() {
  return (
    <div className="p-10">
      <div className="flex flex-col gap-10">
        <ButtonsDesign />
        <InputFieldsDesign />
        <ModalDesign />
        <TableDesign />
        <SelectFieldDesign />
        <Receipt data={receiptData[0]} />
      </div>
    </div>
  );
}
