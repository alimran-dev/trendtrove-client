import { useEffect, useState } from "react";
import BrandCard from "./BrandCard";

const Brands = () => {
  const [brands, setBrands] = useState();
  useEffect(() => {
    fetch("https://brand-shop-server-xi.vercel.app/brands")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);
  console.log(brands);
  return (
    <div className="space-y-4">
      <h1 className="text-4xl font-bold text-center bg-gradient-to-t from-pink-700 to-pink-300 bg-clip-text text-transparent py-1">
        Shop by Your Favorite Brands
      </h1>
      <p className="text-center w-2/3 mx-auto">
        Explore our diverse range of premium brands, each offering a distinctive
        blend of style and quality. Click on the brand logos below to shop a
        wide selection of products from your favorite designers. From timeless
        classics to cutting-edge fashion, we&apos;ve curated the best from each
        brand to enhance your shopping experience.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 justify-around items-center mt-10">
        {brands?.map((brand) => (
          <BrandCard key={brand._id} brand={brand} />
        ))}
      </div>
    </div>
  );
};

export default Brands;
