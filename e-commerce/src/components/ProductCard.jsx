import { useCart } from "../context/CartContext";

const ProductCard = ({ product })=>{
    const {dispatch} = useCart();

    return(
        <div className="border p-4 bg-[#FAFFFD] rounded-lg shadow-md">
      <h2 className="text-lg font-bold">{product.name}</h2>
      <p className="text-gray-500">${product.price}</p>
       <button
       onClick={()=> dispatch({type: "ADD_TO_CART",payload:product})}
       className="bg-[#FA824C] text-white p-2 rounded mt-2"
       >Add to Cart</button>
      </div>
    )

}

export default ProductCard;