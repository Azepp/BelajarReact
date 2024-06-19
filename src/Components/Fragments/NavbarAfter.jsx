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

export default NavbarAfter;
