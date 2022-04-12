import products from "../data/products.json";
import ProductCard from "../components/ProductCard";

export default function Shop() {
  return (
    <div className="container p-4">
      <h1>Productos</h1>
      {products.map(({ id, name, price, description, image_url }) => (
        <div key={id} className="py-3">
          <ProductCard
            id={id}
            name={name}
            price={price}
            description={description}
            image_url={image_url}
          />
        </div>
      ))}
    </div>
  );
}
