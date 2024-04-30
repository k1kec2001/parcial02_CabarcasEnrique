import { NavLink } from "react-router-dom";
import miLogo from "../../../assets/img/iconooo.png";

export const Cabecera = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img src={miLogo} alt="logo" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink className="nav-link active" aria-current="page" to="/">
                Inicio
              </NavLink>
              <NavLink className="nav-link" to="/crearconcierto">
                Conciertos
              </NavLink>
              <NavLink className="nav-link" to="/*">
                Acerca de
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
