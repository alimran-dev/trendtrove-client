/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";

const BrandProducts = () => {
  const { brand } = useParams();
  const [products, setProducts] = useState();
  useEffect(() => {
    fetch(`https://brand-shop-server-xi.vercel.app/products/${brand}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <div>
        
      </div>
      <h1 className="text-4xl font-bold text-center bg-gradient-to-t from-pink-700 to-pink-300 bg-clip-text text-transparent py-1 my-4">
        Products from {brand}
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center">
        {products?.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default BrandProducts;
