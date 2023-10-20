import { useEffect, useState } from "react";
import NewCard from "./NewCard";

const NewArrivals = () => {
  const [NewArrivals, setNewArrivals] = useState(null);
  useEffect(() => {
    fetch("https://brand-shop-server-xi.vercel.app/products")
      .then((res) => res.json())
      .then((data) => {
        const newData = data.slice(0, 6);
        setNewArrivals(newData);
        console.log(newData);
      });
  }, []);
  return (
    <div>
      <h1 className="text-4xl font-bold text-center bg-gradient-to-t from-pink-700 to-pink-300 bg-clip-text text-transparent py-1">
        Our New Arrivals
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center items-center mt-10">
        {NewArrivals?.map((newArrival) => (
          <NewCard key={newArrival._id} newArrival={newArrival} />
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
