import logo from "../assets/logo.png";

export default function Login() {
  return (
    <div className="pt-5">
      <div className="text-center d-flex justify-content-center align-items-center">
        <div className="form-signin">
          <form>
            <img className="mb-4" src={logo} alt="" width="100" height="100" />
            <h1 className="h3 mb-3 fw-normal">Inicio de sesion</h1>

            <div className="form-floating my-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Correo electronico</label>
            </div>
            <div className="form-floating my-3">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Contraseña"
              />
              <label for="floatingPassword">Contraseña</label>
            </div>

            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me" /> Recuerdame
              </label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">
              Iniciar sesion
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
