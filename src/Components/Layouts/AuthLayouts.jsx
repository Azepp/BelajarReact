import { Link } from "react-router-dom";

function AuthLayout(props) {
  const { title, desc, children, type } = props;
  return (
    <div className="min-h-screen flex justify-center items-center mx-4 sm:mx-10">
      <div className="w-full max-w-md">
        <div className="title">
          <h1 className="text-3xl font-bold text-blue-500">{title}</h1>
          <p className="text-medium mt-2">{desc}</p>
        </div>
        {children}
        <NavigationAuth type={type} />
      </div>
    </div>
  );
}

function NavigationAuth({ type }) {
  if (type === "login") {
    return (
      <div className="link flex gap-1 mt-4">
        <p>Dont have an account?</p>{" "}
        <Link to="/register" className="text-blue-500 font-bold underline">
          Register
        </Link>
      </div>
    );
  } else {
    return (
      <div className="link flex gap-1 mt-4">
        <p>Already have an account?</p>{" "}
        <Link to="/login" className="text-blue-500 font-bold underline">
          Login
        </Link>
      </div>
    );
  }
}

export default AuthLayout;
