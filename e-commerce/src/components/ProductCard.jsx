import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { dispatch } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    if (!user) {
      alert("You must be logged in to add items to the cart!"); // Or use a modal
      navigate("/login"); // Redirect to login page
      return;
    }
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <div className="border p-4 bg-[#FAFFFD] rounded-lg shadow-md">
      <h2 className="text-lg font-bold">{product.name}</h2>
      <p className="text-gray-500">{product.price}Rs</p>
      <button
        onClick={handleAddToCart}
        className="bg-[#FA824C] text-white p-2 rounded mt-2"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
