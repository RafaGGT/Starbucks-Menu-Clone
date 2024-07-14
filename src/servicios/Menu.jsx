import React from "react";
import Data from "../data/Data";

const Menu = () => {
  return (
    <div className="box">
      <div className="texto">
        <h2>¡Disfrútalos!</h2>
        <h1>Conoce nuestras bebidas y alimentos de temporada</h1>
      </div>
      {Data.map((dato) => (
        <div key={dato.tipo}>
          <div className="Producto">
            <div className="titulo">{dato.tipo}</div>
          </div>
          <div className="listado">
            {dato.formato.map((item) => (
              <div className="sell-items" key={item}>
                <img
                  className="sell-icon"
                  src={`/image/${item}.png`}
                  alt={item}
                />
                <div className="item-label">{item}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
