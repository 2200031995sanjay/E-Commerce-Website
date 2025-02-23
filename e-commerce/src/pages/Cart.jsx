import { useState } from "react";
import { useCart } from "../context/CartContext";
import { Snackbar, Alert } from "@mui/material";

const Cart = () => {
  const { cart, dispatch } = useCart();
  const [open, setOpen] = useState(false);

  const handleRemove = (item) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: item.id });
    setOpen(true);
  };

  return (
    <div className="p-6 max-w-xl mx-auto mt-24  min-h-screen rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-6 text-[#F06543]">Shopping Cart</h1>

      {cart.length > 0 ? (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-4 bg-white rounded-md shadow-md border border-[#B3BFB8]"
            >
              <div>
                <h2 className="text-lg font-bold text-[#042A2B]">{item.name}</h2>
                <p className="text-gray-600 font-semibold">{item.price} Rs</p>
              </div>
              <button
                onClick={() => handleRemove(item)}
                className="px-4 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      )}

      {/* Snackbar Notification */}
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={() => setOpen(false)} severity="warning" variant="filled">
          Item removed from cart!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Cart;
