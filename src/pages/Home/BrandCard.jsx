import PropTypes from "prop-types";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const BrandCard = ({ brand }) => {
  const { img, brandName } = brand || {};
  const navigate = useNavigate();
  const { isDark } = useContext(AuthContext);
  return (
    <div
      onClick={() => navigate(`/products/${brandName}`)}
      className={`flex flex-col items-center justify-between gap-3 w-40 h-40 mx-auto p-5 rounded-md hover:cursor-pointer ${
        isDark ? "bg-pink-500" : "bg-pink-100"
      }`}
    >
      <img src={img} alt={brandName} className="w-32 max-h-20" />
      <h1 className="text-3xl font-semibold">{brandName}</h1>
    </div>
  );
};

export default BrandCard;
BrandCard.propTypes = {
  brand: PropTypes.object.isRequired,
};
