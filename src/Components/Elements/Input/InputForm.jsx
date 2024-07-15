/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import { forwardRef } from "react";
import Input from "./Input";
import Label from "./Label";

const InputForm = forwardRef((props, ref) => {
  const { label, type, placeholder, name } = props;
  return (
    <div className="mt-4">
      <Label htmlFor={name}>
        {label}
      </Label>
      <Input type={type} placeholder={placeholder} name={name} ref={ref} />
    </div>
  );
});

export default InputForm;
