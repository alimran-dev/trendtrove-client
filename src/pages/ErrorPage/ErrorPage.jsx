import { useNavigate, useRouteError } from "react-router-dom";
import errorImg from "../../assets/pngegg.png";

const ErrorPage = () => {
    const error = useRouteError();
    const navigate = useNavigate();
  console.log(error);
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center border-2 border-pink-600 m-10 md:m-20 p-10 pt-0 lg:pt-8">
      <div className="flex-1 flex justify-end">
        <img src={errorImg} alt="" className="w-96" />
      </div>
      <div className="flex-1 space-y-4">
        <h1 className="text-9xl font-bold bg-gradient-to-t from-pink-700 to-pink-300 bg-clip-text text-transparent">
          {error?.status}
        </h1>
        <p className="text-5xl font-semibold bg-gradient-to-t from-pink-700 to-pink-300 bg-clip-text text-transparent">
          {error?.statusText}
        </p>
        <button onClick={()=>navigate('/')} className="block w-fit mx-auto lg:mx-0 rounded-lg bg-gradient-to-tr from-pink-700 to-pink-500 py-1.5 px-4 font-sans text-base font-bold uppercase text-white shadow-md shadow-pink-500/20 hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
