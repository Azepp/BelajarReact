import { useLocation, useNavigate } from "react-router-dom";
import Button from "../Elements/Button/Button";

function NavbarAfter() {
  const email = localStorage.getItem("email");
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/";
  };

  return (
    <div className="flex w-full justify-between gap-4 items-center bg-blue-500 py-4 px-12 text-white">
      <h1>{email}</h1>
      {location.pathname !== "/" && (
        <Button variant="bg-red-500" text="white" size="w-1/2" onClick={handleLogout}>
          Logout
        </Button>
      )}
    </div>
  );
}

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

function Navbar() {
  const location = useLocation();

  return location.pathname === "/" ? <NavbarBefore /> : <NavbarAfter />;
}

export default Navbar;
