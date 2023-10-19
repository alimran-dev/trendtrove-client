import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";
import Footer from "../pages/shared/Footer";

const Root = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="z-10">
        <Navbar />
      </div>
      <div className="h-full flex-grow px-10 md:px-14 lg:px-20">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
