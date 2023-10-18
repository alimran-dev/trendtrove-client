import PropTypes from "prop-types";

const BrandCard = ({ brand }) => {
  const { img, brandName } = brand || {};
  return (
    <div className="flex flex-col items-center justify-center gap-3 bg-pink-100 w-40 h-40 p-5 rounded-md hover:cursor-pointer">
      <img src={img} alt={brandName} className="w-32 max-h-24" />
      <h1 className="text-3xl font-semibold">{brandName}</h1>
    </div>
  );
};

export default BrandCard;
BrandCard.propTypes = {
  brand: PropTypes.object.isRequired,
};
