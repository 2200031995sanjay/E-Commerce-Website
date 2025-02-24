import { createContext, useContext, useState } from "react";

const ProductContext = createContext();

// eslint-disable-next-line react/prop-types
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", price: 75000.0 },
    { id: 2, name: "Phone", price: 35000.0 },
  ]);

  const addProduct = (name, price) => {
    setProducts([...products, { id: Date.now(), name, price: parseFloat(price) }]);
  };

  return (
    <ProductContext.Provider value={{ products, addProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
