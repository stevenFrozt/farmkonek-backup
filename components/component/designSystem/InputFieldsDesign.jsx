import PasswordField from "component/UI/PasswordField";
import TextArea from "component/UI/TextArea";
import TextField from "component/UI/TextField";
import React from "react";
import { RiUser6Line } from "react-icons/ri";

const InputFieldsDesign = () => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl">Text Fields</h1>
        <div className="flex flex-col justify-center-center gap-4 flex-wrap">
          <TextField placeholder="normal field" />
          <TextField placeholder="required field" required label="Label" />
          <TextField
            placeholder="required field"
            required
            label="With Left Icon"
            leftIcon={<RiUser6Line />}
          />
          <TextField
            placeholder="required field"
            required
            label="With Left Icon"
            rightIcon={<RiUser6Line />}
          />
          <PasswordField label="Password" required />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl">Text Area</h1>
        <div className="flex flex-col justify-center-center gap-4 flex-wrap">
          <TextArea placeholder="normal field" />
          <TextArea placeholder="required field" required label="Label" />
        </div>
      </div>
    </>
  );
};

export default InputFieldsDesign;
