import { Link } from "react-router-dom";
import Button from "../Elements/Button/Button";

function FirstSection() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-4 px-12">
      <h1 className="text-3xl font-bold">
        Welcome to <span className="text-transparent inline-block bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">ShoesSell</span>
      </h1>
      <p className="">ShoesSell is Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel sunt similique, et obcaecati natus quae ab accusamus odit non eius.</p>
      <div className="flex justify-center sm:w-1/2 gap-2">
        <Link to="/login">
          <Button variant="bg-blue-500" text="white" hover="bg-blue-700" size="full">
            Login
          </Button>
        </Link>
        <Link to="/register">
          <Button variant="bg-blue-500" text="white" hover="bg-blue-700" size="full">
            Register
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default FirstSection;
