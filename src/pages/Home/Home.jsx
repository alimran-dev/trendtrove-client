import Banner from "./Banner";
import Brands from "./Brands";
import NewArrivals from "./NewArrivals";

const Home = () => {
  return (
    <div className="py-8 space-y-10">
      <Banner />
      <Brands />
      <NewArrivals />
    </div>
  );
};

export default Home;
