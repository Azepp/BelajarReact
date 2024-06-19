import { useNavigate } from "react-router-dom";
import Button from "../Elements/Button/Button";

function NavbarBefore() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleRegis = () => {
    navigate("/register");
  };

  return (
    <div className="flex w-full justify-between gap-4 items-center bg-blue-500 py-4 px-12 text-white fixed">
      <h1 className="text-2xl font-bold">ShoesSell</h1>
      <ul className="flex gap-2">
        <li>Home</li>
        <li>Product</li>
        <li>Home</li>
        <li>Home</li>
      </ul>

      <div className="flex gap-2">
        <Button variant="outline outline-2" text="white" size="w-1/2" onClick={handleLogin}>
          Login
        </Button>
        <Button variant="bg-orange-500" text="white" size="w-1/2" onClick={handleRegis}>
          Register
        </Button>
      </div>
    </div>
  );
}

export default NavbarBefore;
