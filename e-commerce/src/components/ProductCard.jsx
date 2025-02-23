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
  const [open, setOpen] = useState(false); // Snackbar state

  const handleAddToCart = () => {
    if (!user) {
      alert("You must be logged in to add items to the cart!"); // Or use a modal
      navigate("/login");
      return;
    }
    dispatch({ type: "ADD_TO_CART", payload: product });
    setOpen(true); // Show success notification
  };

  return (
    <div className="border p-4 bg-[#FAFFFD] rounded-lg shadow-md">
      <h2 className="text-lg font-bold">{product.name}</h2>
      <p className="text-gray-500">{product.price} Rs</p>
      <button
        onClick={handleAddToCart}
        className="bg-[#FA824C] text-white p-2 rounded mt-2"
      >
        Add to Cart
      </button>

      {/* Snackbar for success message */}
      <Snackbar
        open={open}
        autoHideDuration={2000} // Auto close after 2 seconds
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
