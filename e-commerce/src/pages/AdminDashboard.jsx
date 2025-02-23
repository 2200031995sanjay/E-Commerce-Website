
import { useState } from 'react';

export default function AdminDashboard() {
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", price: 999 },
    { id: 2, name: "Phone", price: 699 },
  ])
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const addProduct = ()=>{
    if(name && price){
      setProducts([...products,{id:Date.now(),name, price:parseFloat(price)}]);
      setName("");
      setPrice("");
    }
  };

  const removeProduct=(id)=>{
    setProducts(products.filter((product)=> product.id !== id));
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <div className="mt-4">
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2 border mr-2"
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="p-2 border mr-2"
        />
        <button onClick={addProduct} className="p-2 bg-green-500 text-white rounded">Add Product</button>
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-bold">Product List</h2>
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="flex justify-between p-2 border-b">
              {product.name} - ${product.price}
              <button onClick={() => removeProduct(product.id)} className="text-red-500">Remove</button>
            </div>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </div>
  )
}

