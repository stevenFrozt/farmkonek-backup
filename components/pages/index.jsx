import ButtonsDesign from "component/designSystem/ButtonsDesign";
import InputFieldsDesign from "component/designSystem/InputFieldsDesign";
import ModalDesign from "component/designSystem/ModalDesign";
import TableDesign from "component/designSystem/TableDesign";
import Button from "component/UI/Button/Button";
import SummaryCard from "component/UI/Cards/SummaryCard";
import SearchField from "component/UI/SearchField";
import SelectField from "component/UI/SelectField";
import TextArea from "component/UI/TextArea";
import TextField from "component/UI/TextField";
import Receipt from "component/UI/Receipt";
import { useState } from "react";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import receiptData from "../data/receiptData1.json";

export default function Home() {
  const [selected, setSelected] = useState();
  return (
    <div className="p-10">
      <div className="flex flex-col gap-10">
        <ButtonsDesign />

        <InputFieldsDesign />
        <ModalDesign />
        <TableDesign />
        <Receipt data={receiptData[0]} />
        <SelectField
          size={"lg"}
          data={["hello", "world"]}
          label="product"
          selected="Food"
          fullWidth={false}
        />
      </div>
    </div>
  );
}
