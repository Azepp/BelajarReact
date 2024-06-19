import Input from "./Input";
import Label from "./Label";

function InputForm(props) {
  const { label, type, placeholder, name } = props;
  return (
    <div className="mt-4">
      <Label htmlFor={name}>
        {label}
      </Label>
      <Input type={type} placeholder={placeholder} name={name}/>
    </div>
  );
}

export default InputForm;
