/* eslint-disable react/display-name */
import { forwardRef } from "react";

/* eslint-disable react/prop-types */
const Input = forwardRef((props, ref) => {
  const { type, placeholder, name } = props;
  return (
    <input
      id={name}
      type={type}
      name={name}
      className="w-full py-2 px-3 rounded-md border-slate-500 focus:ring-1 focus:ring-blue-500 focus:outline-none border border-opacity-50 text-sm bg-transparent"
      placeholder={placeholder}
      required
      ref={ref}
    />
  );
});

export default Input;
