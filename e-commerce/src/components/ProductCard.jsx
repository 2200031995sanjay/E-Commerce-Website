/* eslint-disable react/prop-types */
import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Snackbar, Alert } from "@mui/material";

const ProductCard = ({ product }) => {
  const { dispatch } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleAddToCart = () => {
    if (!user) {
      alert("You must be logged in to add items to the cart!");
      navigate("/login");
      return;
    }
    dispatch({ type: "ADD_TO_CART", payload: product });
    setOpen(true);
  };

  return (
    <div className="bg-white shadow-lg rounded-md p-5 border border-[#B3BFB8] w-full max-w-md mt-6 mx-auto">
      <h2 className="text-xl font-bold text-[#042A2B]">{product.name}</h2>
      <p className="text-gray-600 font-semibold">{product.price} Rs</p>
      <button
        onClick={handleAddToCart}
        className="w-full p-3 bg-[#F06543] text-white font-semibold rounded-md mt-3 hover:bg-[#d95336] transition"
      >
        Add to Cart
      </button>

      {/* Snackbar for success message */}
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={() => setOpen(false)} severity="success" variant="filled">
          Item successfully added to cart!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default ProductCard;
