import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav1">
      <div className="left-links">
        <NavLink>
          <img src={`/image/logo.svg`} />
        </NavLink>
        <NavLink>MENÚ</NavLink>
        <NavLink>REWARDS</NavLink>
        <NavLink>CAFÉ</NavLink>
        <NavLink>GIFT</NavLink>
      </div>
      <div className="rigth-links">
        <NavLink className="Navtext">
          <img src={`/image/Ubicacion.svg`} />
          Localizar Tienda
        </NavLink>
        <NavLink className="Lbutton">Iniciar Sesión</NavLink>
        <NavLink className="Rbutton">Únete</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
