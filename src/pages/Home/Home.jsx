import Banner from "./Banner";
import Brands from "./Brands";
import NewArrivals from "./NewArrivals";
import Offer from "./Offer";

const Home = () => {
  return (
    <div className="py-8 space-y-10">
      <Banner />
      <Brands />
      <NewArrivals />
      <Offer />
    </div>
  );
};

export default Home;
