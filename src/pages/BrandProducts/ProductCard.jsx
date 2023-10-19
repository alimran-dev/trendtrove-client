import PropTypes from "prop-types";
import { AiTwotoneStar } from "react-icons/ai";

const ProductCard = ({ product }) => {
  const { name, brand, price, type, rating, photo } = product;
  console.log(product);
  return (
    <div>
      <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
        <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-60 rounded-xl bg-clip-border">
          <img src={photo} className="w-full h-full" />
        </div>
        <div className="p-6 pb-3">
          <div className="flex items-center justify-between mb-2">
            <p className="block font-sans text-xl antialiased font-medium text-blue-gray-900">
              {name}
            </p>
            <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
              ${price.toFixed(2)}
            </p>
          </div>
          <div>
            <p>
              <span className="font-medium">Brand: </span>
              {brand}
            </p>
            <p>
              <span className="font-medium">Type: </span>
              {type}
            </p>
            <p className="flex items-center gap-1">
              <span className="font-medium">Ratings: </span>
              {rating} <AiTwotoneStar />
            </p>
          </div>
        </div>
        <div className="flex justify-around p-6 pt-0">
          <button className="block w-1/3 rounded-lg bg-gradient-to-tr from-pink-700 to-pink-500 py-1.5 px-4 font-sans text-base font-bold uppercase text-white shadow-md shadow-pink-500/20 hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
            Details
          </button>
          <button className="block w-1/3 rounded-lg bg-gradient-to-tr from-pink-700 to-pink-500 py-1.5 px-4 font-sans text-base font-bold uppercase text-white shadow-md shadow-pink-500/20 hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};
