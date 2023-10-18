import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const navigate = useNavigate();
  const navLinks = (
    <>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/addProduct"}>Add Product</NavLink>
      <NavLink to={"/cart"}>My Cart</NavLink>
    </>
  );
  return (
    <div>
      <nav className="mx-auto block w-full max-w-screen-xl rounded-xl border border-white/80 bg-white bg-opacity-80 py-2 px-4 text-white shadow-md backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
        <div>
          {/* Desktop design */}
          <div className="container mx-auto flex items-center justify-between text-gray-900">
            <Link to={"/"} className="mr-4 block cursor-pointer h-14">
              <img src={logo} alt="" className="h-full" />
            </Link>
            <ul className="hidden items-center gap-6 lg:flex md:text-lg font-medium">
              {navLinks}
              <button
                onClick={() => navigate("/login")}
                className="hidden rounded-lg bg-gradient-to-tr from-pink-500 to-pink-400 py-2 px-4 font-sans text-base font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
                type="button"
                data-ripple-light="true"
              >
                <span>Login</span>
              </button>
            </ul>
            <button
              onClick={() => setOpen(!isOpen)}
              className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] rounded-lg text-center font-sans text-xs font-medium uppercase text-blue-gray-500 transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
            >
              <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </span>
            </button>
          </div>
          <div
            className={`block absolute top-14 right-8 w-36 bg-white border-2 border-gray-400 rounded-lg p-2 basis-full overflow-hidden lg:hidden ${
              isOpen ? "visible" : "invisible"
            }`}
          >
            <div className="container mx-auto pb-2">
              <ul className="mt-2 mb-2 flex flex-col items-center gap-0.5 text-black font-medium ">
                {navLinks}
              </ul>
              <button
                onClick={() => navigate("/login")}
                className="block w-full rounded-lg bg-gradient-to-tr from-pink-500 to-pink-400 py-1.5 px-4 font-sans text-base font-bold uppercase text-white shadow-md shadow-pink-500/20 hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                data-ripple-light="true"
              >
                <span>Login</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
