import { useState } from "react";
import SelectField from "../UI/SelectField";

const SelectFieldDesign = () => {
  const [selected, setSelected] = useState("Default");

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-2xl">Button</h1>
      <SelectField
        data={["Hello", "hi"]}
        selected={selected}
        setSelected={setSelected}
      />
      <SelectField
        data={["Hello", "hi"]}
        selected={selected}
        setSelected={setSelected}
        size="sm"
      />
      {/* Kung gusto mo naka full ang width */}
      <SelectField
        data={["Hello", "hi"]}
        selected={selected}
        setSelected={setSelected}
        size="lg"
        fullWidth
      />
    </div>
  );
};

export default SelectFieldDesign;
