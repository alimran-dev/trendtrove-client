import Banner from "./Banner";
import Brands from "./Brands";

const Home = () => {
  return (
    <div className="px-10 md:px-14 lg:px-20 py-8 space-y-10">
      <Banner />
      <Brands />
    </div>
  );
};

export default Home;
