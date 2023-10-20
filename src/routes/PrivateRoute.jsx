import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const {pathname} = useLocation();
    console.log(pathname);

  if (loading) {
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <span className="h-20 w-20 rounded-full border-[12px] border-pink-300 border-t-pink-600 animate-spin"></span>
      </div>
    );
    }
    if (!user) {
        return <Navigate state={pathname} to={'/login'}></Navigate>;
    }
    return children;
};

export default PrivateRoute;
PrivateRoute.propTypes = {
  children: PropTypes.node,
};
