import banner from "../../assets/banner.jpg";
import bannerGirls from "../../assets/banner-girls.png";

const Banner = () => {
  const bgStyle = {
    backgroundImage: `url('${banner}')`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <div>
      <div
        style={bgStyle}
        className="w-full md:h-[400px] lg:h-[550px] bg-pink-950 flex flex-col md:flex-row justify-around relative px-7 md:px-12 lg:px-16 rounded-md"
      >
        <div className="flex-1 flex flex-col justify-center gap-5 py-10 text-center md:text-left">
          <h1 className="text-3xl lg:text-5xl font-bold text-white">
            Find Your Fashion, Define Your Trend
          </h1>
          <p className="font-medium text-white">
            Experience the joy of fashion discovery. TrendTrove is your
            destination for high-quality clothing and accessories that inspire
            confidence.
          </p>
          <button className="w-fit bg-white py-1.5 px-3 text-lg font-semibold text-pink-600 rounded-lg hover:shadow-lg hover:shadow-pink-400 block mx-auto md:mx-0">
            Purchase
          </button>
        </div>
        <div className="flex-1 relative">
          <img
            src={bannerGirls}
            alt=""
            className="md:absolute bottom-0 md:w-full lg:w-11/12 lg:left-1/2 lg:-translate-x-1/2"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
