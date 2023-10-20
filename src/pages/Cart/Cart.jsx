import { useEffect, useState } from "react";
import CartProduct from "./CartProduct";
import Swal from "sweetalert2";

const Cart = () => {
    const [carts, setCarts] = useState(null);
  useEffect(() => {
    fetch("https://brand-shop-server-xi.vercel.app/cart")
      .then((res) => res.json())
        .then((data) => {
            setCarts(data);
            console.log(data);
      });
  }, []);
  const handleDelete = (id) => {
      fetch(`https://brand-shop-server-xi.vercel.app/cart/${id}`, {
        method: 'DELETE'
    })
    .then(res=>res.json())
        .then(data => {
            const remaining = carts.filter(cart => cart._id !== id);
            setCarts(remaining);
            if (data.deletedCount > 0) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Product deleted successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
            console.log(data);
    })
}
  return (
    <div>
      <h1 className="text-4xl font-bold text-center bg-gradient-to-t from-pink-700 to-pink-300 bg-clip-text text-transparent py-1 my-4">
        Your Cart
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center">
        {carts?.map((cart) => (
            <CartProduct key={cart._id} cart={cart} handleDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
