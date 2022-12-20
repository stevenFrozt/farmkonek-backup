import ButtonsDesign from "component/designSystem/ButtonsDesign";
import InputFieldsDesign from "component/designSystem/InputFieldsDesign";
import ModalDesign from "component/designSystem/ModalDesign";
import TableDesign from "component/designSystem/TableDesign";
import { useState } from "react";
import SelectFieldDesign from "component/designSystem/SelectFieldDesign";
import MainLayout from "component/layout/MainLayout";
export default function Home() {
  return (
    <MainLayout>
      <div className="flex flex-col gap-10">
        <ButtonsDesign />
        <InputFieldsDesign />
        <ModalDesign />
        <TableDesign />
        <SelectFieldDesign />
      </div>
    </MainLayout>
  );
}
