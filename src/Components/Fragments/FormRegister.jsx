import Button from "../Elements/Button/Button";
import InputForm from "../Elements/Input/InputForm";

function FormRegister() {
  return (
    <form action="">
      <InputForm label="Fullname" type="text" placeholder="Enter your fullname" name="fullname"></InputForm>
      <InputForm label="Email" type="email" placeholder="Enter your email" name="email"></InputForm>
      <InputForm label="Password" type="password" placeholder="Enter your password" name="password"></InputForm>
      <InputForm label="Confirm Password" type="password" placeholder="Confirm your password" name="confirmpassword"></InputForm>

      <Button variant="bg-blue-500" text="white" hover="bg-blue-700" margin="mt-6" to="/products">
        Register
      </Button>
    </form>
  );
}

export default FormRegister;
