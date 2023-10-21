import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Offer = () => {
  const [offers, setOffers] = useState();
  useEffect(() => {
    fetch("https://brand-shop-server-xi.vercel.app/offers")
      .then((res) => res.json())
      .then((data) => setOffers(data));
  }, []);
  return (
    <div>
      <h1 className="text-4xl font-bold text-center bg-gradient-to-t from-pink-700 to-pink-300 bg-clip-text text-transparent py-1">
        Trendy Offers
      </h1>
      <div className="my-5">
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
          {offers?.map((offer) => (
            <SwiperSlide key={offer._id} className="rounded-lg">
              <img
                src={offer.img}
                alt=""
                className="h-full w-full rounded-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Offer;
