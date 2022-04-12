import user from "../data/user.json";
import photo from "../assets/photo.png";

export default function Profile() {
  return (
    <div className="pt-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <img
              src={photo}
              className="rounded-circle mx-auto d-block"
              width="200"
            />
            <button className="btn btn-info btn-lg my-4 mx-auto d-block">
                Editar datos
            </button>
            
          </div>
          <div className="col-lg-8">
            <div className="card bg-light">
              <div className="card-title">
                <h2 className="m-3">Informacion personal</h2>
              </div>
              <div className="card-body">
                <div className="mb-3">
                  <label for="name" className="form-label">
                    Nombre
                  </label>
                  <input type="text" className="form-control" id="name" value={user.name} readOnly/>
                </div>
                <div className="mb-3">
                  <label for="lastname" className="form-label">
                    Apellido
                  </label>
                  <input type="text" className="form-control" id="lastname" value={user.lastname} readOnly/>
                </div>
                <div className="mb-3">
                  <label for="birthdate" className="form-label">
                    Fecha de nacimiento
                  </label>
                  <input type="date" className="form-control" id="birthdate" />
                </div>
                <div className="mb-3">
                  <label for="lastname" className="form-label">
                    Correo electronico
                  </label>
                  <input type="text" className="form-control" id="email" value={user.email} readOnly/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
