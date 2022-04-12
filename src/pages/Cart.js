import CartCard from "../components/Cart/CartCard";
import Summary from "../components/Cart/Summary";
import products from "../data/products.json";

export default function Cart() {
  return (
    <div className="container p-4">
      <h1>Carrito</h1>
      <div className="row">
        <div className="col-lg-8">
            {products.map(({ id, name, price, image_url }) => (
              <div key={id} className="py-3">
                <CartCard
                  id={id}
                  name={name}
                  price={price}
                  image_url={image_url}
                />
              </div>
            ))}
        </div>
        <div className="col-lg-4">
            <Summary products={products}/>
        </div>
      </div>
    </div>
  );
}
