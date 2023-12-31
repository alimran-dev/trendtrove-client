/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [product] = data || [];
  const { name, brand, price, type, rating, photo, description } =
    product || {};
  useEffect(() => {
    fetch(`https://brand-shop-server-xi.vercel.app/product/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  console.log(product);
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const brand = form.brand.value;
    const price = form.price.value;
    const type = form.type.value;
    const rating = form.rating.value;
    const photo = form.photo.value;
    const description = form.description.value;
    const product = { name, brand, price, type, rating, photo, description };
    console.log(product);
    fetch(`https://brand-shop-server-xi.vercel.app/product/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Product updated successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div className="px-10 md:px-14 lg:px-20 py-8 space-y-10">
      <h1 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-t from-pink-700 to-pink-300 bg-clip-text text-transparent py-1">
        Update a Product
      </h1>
      <form onSubmit={handleUpdate} className="space-y-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 justify-center mt-10">
          {/* form left side */}
          <div className="space-y-2">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-xl font-semibold">
                Name
              </label>
              <input
                type="text"
                name="name"
                defaultValue={name}
                placeholder="Enter Product Name"
                className="w-full py-2 px-3 rounded-md focus:outline-pink-600"
                id=""
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="brand" className="block text-xl font-semibold">
                Brand
              </label>
              <select
                name="brand"
                className="w-full py-2 px-3 rounded-md focus:outline-pink-600"
                id=""
              >
                <option value={brand}>{brand}</option>
                <option value={"Adidas"}>Adidas</option>
                <option value={"Gucci"}>Gucci</option>
                <option value={"Zara"}>Zara</option>
                <option value={"H&M"}>H&M</option>
                <option value={"Levi's"}>Levi&apos;s</option>
                <option value={"Nike"}>Nike</option>
              </select>
            </div>
            <div className="space-y-2">
              <label htmlFor="price" className="block text-xl font-semibold">
                Price
              </label>
              <input
                type="text"
                name="price"
                defaultValue={price}
                placeholder="Enter Product Price"
                className="w-full py-2 px-3 rounded-md focus:outline-pink-600"
                id=""
              />
            </div>
          </div>
          {/* form right side */}
          <div className="space-y-2">
            <div className="space-y-2">
              <label htmlFor="type" className="block text-xl font-semibold">
                Type of Product
              </label>
              <select
                name="type"
                className="w-full py-2 px-3 rounded-md focus:outline-pink-600"
                id=""
              >
                <option value={type}>{type}</option>
                <option value={"Kids and Baby Clothing"}>
                  Kids and Baby Clothing
                </option>
                <option value={"Apparel"}>Apparel</option>
                <option value={"Footwear"}>Footwear</option>
                <option value={"Accessories"}>Accessories</option>
                <option value={"Swimwear"}>Swimwear</option>
                <option value={"Formalwear"}>Formalwear</option>
              </select>
            </div>
            <div className="space-y-2">
              <label htmlFor="rating" className="block text-xl font-semibold">
                Rating
              </label>
              <input
                type="text"
                name="rating"
                defaultValue={rating}
                placeholder="Enter Product Rating"
                className="w-full py-2 px-3 rounded-md focus:outline-pink-600"
                id=""
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="photo" className="block text-xl font-semibold">
                Photo URL
              </label>
              <input
                type="text"
                name="photo"
                defaultValue={photo}
                placeholder="Enter Photo URL"
                className="w-full py-2 px-3 rounded-md focus:outline-pink-600"
                id=""
              />
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="description" className="block text-xl font-semibold">
            Short Description
          </label>
          <input
            type="text"
            name="description"
            defaultValue={description}
            placeholder="Enter Short Description..."
            className="w-full py-2 px-3 rounded-md focus:outline-pink-600"
            id=""
          />
        </div>
        <div>
          <button
            type="submit"
            className="bg-pink-200 text-pink-600 font-medium py-1.5 w-full text-2xl drop-shadow-md rounded-md border-2 border-pink-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProduct;
