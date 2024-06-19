import { Link, useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  return (
    <div className="min-h-screen flex justify-center items-center w-full flex-col gap-2">
      <h1 className="text-3xl font-bold">Oppss!</h1>
      <p>Sorry, unexpected error occured</p>
      <p className="text-red-500 font-bold text-2xl">{error.status || error.message}</p>

      <Link to="/" className="text-blue-500 font-bold">
        Back to Landing Page
      </Link>
    </div>
  );
}

export default ErrorPage;
