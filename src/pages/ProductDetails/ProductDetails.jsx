import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AiTwotoneStar } from "react-icons/ai";
import Swal from "sweetalert2";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const { name, brand, price, type, rating, photo, description } = product || {};
  useEffect(() => {
    fetch(`https://brand-shop-server-xi.vercel.app/product/${id}`)
      .then((res) => res.json())
      .then((data) => {
        const [productData] = data;
        setProduct(productData);
      });
  }, []);
  const handleCart = () => {
    const cartProduct = { name, brand, price, type, rating, photo, description };
    fetch("https://brand-shop-server-xi.vercel.app/cart", {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(cartProduct),
    })
    .then(res=>res.json())
      .then(data => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Added to cart successfully',
          showConfirmButton: false,
          timer: 1500
        })
      console.log(data)
    })
  }
  console.log(id);
  return (
    <div className="my-10">
      <div className="relative flex flex-col lg:flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative lg:w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
          <img src={photo} alt="image" className="w-full h-full" />
        </div>
        <div className="p-6">
          <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-pink-500 uppercase">
            {brand}
          </h6>
          <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            {name}
          </h4>
          <p>
            <span className="font-medium text-lg">Price: </span>
            {price}
          </p>
          <p>
            <span className="font-medium text-lg">Type: </span>
            {type}
          </p>
          <p className="flex items-center gap-1">
            <span className="font-medium text-lg">Ratings: </span>
            {rating} <AiTwotoneStar />
          </p>
          <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
            {description}
          </p>
          <a className="inline-block" href="#">
            <button
              onClick={() => handleCart()}
              className="block w-full rounded-lg bg-gradient-to-tr from-pink-700 to-pink-500 py-1.5 px-4 font-sans text-base font-bold uppercase text-white shadow-md shadow-pink-500/20 hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Add to Cart
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
