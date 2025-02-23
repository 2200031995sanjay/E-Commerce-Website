import { useProducts } from "../context/ProductContext";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const { products } = useProducts(); // Fetch products from context

  return (
    <div className="p-6 bg-[#F0F7F4] min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center mb-8 text-[#F06543] mt-24">
        Available Products
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full px-8">
        {products.length > 0 ? (
          products.map((product) => <ProductCard key={product.id} product={product} />)
        ) : (
          <p className="text-center text-gray-600">No products available.</p>
        )}
      </div>
    </div>
  );
}