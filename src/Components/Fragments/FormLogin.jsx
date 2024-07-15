import { useEffect, useRef } from "react";
import Button from "../Elements/Button/Button";
import InputForm from "../Elements/Input/InputForm";
import Remember from "../Elements/Input/Remember";

function FormLogin() {
  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("password", event.target.password.value);
    window.location.href = "/products";
  };

  const emailRef = useRef(null);

  useEffect (() => {
    emailRef.current.focus();
  }, []);

  return (
    <>
      <form onSubmit={handleLogin}>
        <InputForm label="Email" type="email" placeholder="Enter your email" name="email" ref={emailRef}></InputForm>
        <InputForm label="Password" type="password" placeholder="Enter your password" name="password"></InputForm>
        <Remember></Remember>
        <Button variant="bg-blue-500" text="white" hover="bg-blue-700" type="submit" >
          Login
        </Button>
      </form>
    </>
  );
}

export default FormLogin;
