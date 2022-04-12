import SummaryProduct from "./SummaryProduct";

export default function Summary({ products }) {
  return (
    <div className="card card-body bg-light my-3">
      <div className="card-title">
        <h2>Descargo</h2>
      </div>
      <div className="card-body">
        <ul className="list-group list-group-flush">
          {products.map(({ id, name, price, image_url }) => (
            <li key={id} className="list-group-item bg-light">
              <SummaryProduct name={name} price={price} />
            </li>
          ))}
          <li className="list-group-item bg-light text-center pt-3">
            <h5>Total: 100 Bs</h5>
          </li>
          <li className="list-group-item bg-light text-center pt-3">
            <button type="button" className="btn btn-warning btn-lg">
              Confirmar pedido
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
