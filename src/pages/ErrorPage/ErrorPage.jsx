import { useRouteError } from "react-router-dom";
import errorImg from "../../assets/pngegg.png";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center border-2 border-pink-600 md:m-20 p-10">
      <div className="flex-1 flex justify-end">
        <img src={errorImg} alt="" className="w-96" />
      </div>
      <div className="flex-1">
        <h1 className="text-9xl font-bold bg-gradient-to-t from-pink-700 to-pink-300 bg-clip-text text-transparent">
          {error?.status}
        </h1>
        <p className="text-5xl font-semibold bg-gradient-to-t from-pink-700 to-pink-300 bg-clip-text text-transparent">
          {error?.statusText}
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
