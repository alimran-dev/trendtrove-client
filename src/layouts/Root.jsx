import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";
import Footer from "../pages/shared/Footer";

const Root = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="h-full flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
