import Button from "../Elements/Button/Button";
import InputForm from "../Elements/Input/InputForm";
import Remember from "../Elements/Input/Remember";

function FormLogin() {
  return (
    <form action="">
      <InputForm label="Email" type="email" placeholder="Enter your email" name="email"></InputForm>
      <InputForm label="Password" type="password" placeholder="Enter your password" name="password"></InputForm>
      <Remember></Remember>

      <Button variant="bg-blue-500" text="white" hover="bg-blue-700" to="/products">
        Login
      </Button>
    </form>
  );
}

export default FormLogin;
