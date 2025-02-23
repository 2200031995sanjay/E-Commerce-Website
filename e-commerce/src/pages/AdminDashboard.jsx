import { useState } from "react";
import { useProducts } from "../context/ProductContext"; // Import Product Context

export default function AdminDashboard() {
  const { products, addProduct } = useProducts(); // Get products & addProduct function
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleAddProduct = () => {
    if (name && price) {
      addProduct(name, price); // Add product globally
      setName("");
      setPrice("");
    }
  };

  return (
    <div className="h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-xl font-bold text-[#6B0F1A] mb-4 text-center">Admin Dashboard</h1>

        <div className="flex flex-col">
          <input
            type="text"
            placeholder="Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-[#595959] rounded mb-2 outline-none text-[#6B0F1A]"
            required
          />

          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full p-2 border border-[#595959] rounded mb-4 outline-none text-[#6B0F1A]"
            required
          />

          <button
            onClick={handleAddProduct}
            className="w-full p-2 bg-[#6B0F1A] text-white rounded hover:bg-[#500b13] transition"
          >
            Add Product
          </button>
        </div>

        <div className="mt-4">
          <h2 className="text-xl font-bold text-[#6B0F1A] text-center">Product List</h2>
          {products.length > 0 ? (
            <div className="mt-2 space-y-2">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="flex justify-between items-center p-2 border-b bg-gray-100 rounded"
                >
                  <div>
                    <h3 className="text-lg font-medium text-[#6B0F1A]">{product.name}</h3>
                    <p className="text-gray-600">${product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 mt-2">No products available.</p>
          )}
        </div>
      </div>
    </div>
  );
}
