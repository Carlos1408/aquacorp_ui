export default function Profile() {
  return (
    <div className="container-sm py-4">
      <div>
        <h1>Registro de usuario</h1>
      </div>
      <form>

        <div className="mb-3">
          <label for="name" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
          />
        </div>
        <div className="mb-3">
          <label for="lastname" className="form-label">
            Apellido
          </label>
          <input
            type="text"
            className="form-control"
            id="lastname"
          />
        </div>
        <div className="mb-3">
          <label for="birthdate" className="form-label">
            Fecha de nacimiento
          </label>
          <input
            type="date"
            className="form-control"
            id="birthdate"
          />
        </div>

        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Correo electronico
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword2" className="form-label">
            Confirme contraseña
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword2"
          />
        </div>
        <div class="d-grid gap-2">
          <button class="btn btn-primary" type="button">
            Enviar
          </button>
          <button class="btn btn-danger" type="reset">
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}
