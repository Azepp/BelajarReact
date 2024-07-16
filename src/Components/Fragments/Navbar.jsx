import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Button from "../Elements/Button/Button";
import { getUsername } from "../../services/auth.service";

function NavbarAfter() {
  const [username, setUsername] = useState("");
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
       setUsername(getUsername(token));
    } else {
      window.location.href = "/login";
    }
  }, []);

  return (
    <div className="flex w-full justify-between gap-4 items-center bg-blue-500 py-4 px-12 text-white">
      <h1>{username}</h1>
      {location.pathname !== "/" && (
        <Button variant="bg-red-500" text="white" size="w-1/2" onClick={handleLogout}>
          Logout
        </Button>
      )}
    </div>
  );
}

export default NavbarAfter;
