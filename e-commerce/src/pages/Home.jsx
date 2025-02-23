
import ProductCard from './../components/ProductCard';

const products =[
  {id:1, name:"Laptop",price:999},
  {id:2,name:"phone", price:699}
]

export default function Home() {
  return (
    <div className="p-4 bg-F0F7F4 text-042A2B min-h-screen">
    <h1 className="text-2xl font-bold text-F06543">Products</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
    {products.map((product)=>(
      <ProductCard key={product.id} product={product}/>
    ))}
      </div>
      </div>
  )
}
