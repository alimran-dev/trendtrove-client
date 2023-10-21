import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";
import Footer from "../pages/shared/Footer";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Root = () => {
  const { isDark } = useContext(AuthContext);
  return (
    <div className="min-h-screen flex flex-col">
      <div className={`z-10 ${isDark ? "bg-gray-800" : "bg-white"}`}>
        <Navbar />
      </div>
      <div
        className={`h-full flex-grow px-10 md:px-14 lg:px-20 ${
          isDark ? "bg-gray-800" : ""
        }`}
      >
        <Outlet />
      </div>
      <div className={`${isDark?"bg-gray-800":"bg-white"}`}>
      <Footer />
      </div>
    </div>
  );
};

export default Root;
