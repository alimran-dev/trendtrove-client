/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { AuthContext } from "../../Provider/AuthProvider";

const BrandProducts = () => {
  const { brand } = useParams();
  const [products, setProducts] = useState();
  const [ads, setAds] = useState(null);
  const { isDark } = useContext(AuthContext);
  useEffect(() => {
    fetch(`https://brand-shop-server-xi.vercel.app/products/${brand}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
    fetch("https://brand-shop-server-xi.vercel.app/ads")
      .then((res) => res.json())
      .then((data) => setAds(data));
  }, []);
  return (
    <div>
      <div className="my-12">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper h-[250px] md:h-[300px] lg:h-[450px]"
        >
          {ads?.map((ad) => (
            <SwiperSlide key={ad._id} className="rounded-lg">
              <img src={ad.img} alt="" className="h-full w-full rounded-lg" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <h1 className="text-4xl font-bold text-center bg-gradient-to-t from-pink-700 to-pink-300 bg-clip-text text-transparent py-1 my-4">
        Products from {brand}
      </h1>
      {products?.length === 0 && (
        <div className="w-full h-[70vh] flex items-center justify-center">
          {" "}
          <p className={`text-3xl font-bold text-center py-1 my-4 ${isDark?"text-gray-300":""}`}>
            No products available now!
          </p>
        </div>
      )}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center">
        {products?.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default BrandProducts;
