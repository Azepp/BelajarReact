import { useEffect, useRef, useState } from "react";
import Button from "../Elements/Button/Button";
import InputForm from "../Elements/Input/InputForm";
import { login } from "../../services/auth.service";

function FormLogin() {
  const [loginFailed, setLoginFailed] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    // localStorage.setItem("email", event.target.email.value);
    // localStorage.setItem("password", event.target.password.value);
    const data = {
      username : event.target.username.value,
      password : event.target.password.value,
    }

    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/products";
      } else {
        setLoginFailed(res.response.data);
        console.log(res.response.data);
      }
    })
  };

  const usernameRef = useRef(null);

  useEffect (() => {
    usernameRef.current.focus();
  }, []);

  return (
    <>
      <form onSubmit={handleLogin}>
        <InputForm label="Username" type="text" placeholder="Enter your username" name="username" ref={usernameRef}></InputForm>
        <InputForm label="Password" type="password" placeholder="Enter your password" name="password"></InputForm>

        <p className="my-4 text-red-500 text-center capitalize">{loginFailed}</p>

        <Button variant="bg-blue-500" text="white" hover="bg-blue-700" type="submit" >
          Login
        </Button>
      </form>
    </>
  );
}

export default FormLogin;
