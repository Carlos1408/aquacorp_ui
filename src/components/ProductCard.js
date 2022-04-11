//import image from `../assets/${image_url}`
import { Link } from "react-router-dom";
import image from "../assets/botellon.png";

export default function ProductCard({
  id,
  name,
  price,
  description,
  image_url,
}) {
  return (
    <div className="card card-body container py-2 bg-light">
      <div className="row">
        <div className="col-6 col-lg-3">
          <img src={image} height="200px" />
        </div>
        <div className="col-6 col-lg-9">
          <div className="row">
            <div className="list-group list-group-flush">
              <li className="list-group-item bg-light">
                <Link to="#" className="h4 text-decoration-none text-dark">
                  {name}
                </Link>
              </li>
              <li className="list-group-item bg-light">
                <h5>Precio: {price} Bs</h5>
              </li>
            </div>
            <form>
              <div className="col-md-4 col-lg-auto px-1">
                <label for="quantity" className="form-label">
                  Cantidad
                </label>
              </div>
              <div className="input-group mb-3">
                <input
                  className="form-control"
                  placeholder="Cantidad"
                  type="number"
                />
                <button className="btn btn-warning">Realizar pedido</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
