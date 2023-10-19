import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const BrandCard = ({ brand }) => {
  const { img, brandName } = brand || {};
  const navigate = useNavigate();
  return (
    <div onClick={()=>navigate(`/products/${brandName}`)} className="flex flex-col items-center justify-between gap-3 bg-pink-100 w-40 h-40 p-5 rounded-md hover:cursor-pointer">
      <img src={img} alt={brandName} className="w-32 max-h-20" />
      <h1 className="text-3xl font-semibold">{brandName}</h1>
    </div>
  );
};

export default BrandCard;
BrandCard.propTypes = {
  brand: PropTypes.object.isRequired,
};
