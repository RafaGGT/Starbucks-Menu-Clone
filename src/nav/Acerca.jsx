import React from "react";
import Data2 from "../data/Data2";

const Acerca = () => {
  return (
    <div className="box-about">
      <div className="about">
        {Data2.map((datos) => (
          <div className="about-text" key={datos.id}>
            <h3>{datos.titulo}</h3>
            <ul>
              {datos.lista.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="footer-container">
        <div className="footer">
          <div className="social">
            <ul>
              <li className="facebook"></li>
              <li className="instagram"></li>
              <li className="linkedin"></li>
              <li className="twitter"></li>
            </ul>
          </div>
          <div className="footer-text">
            <h4>Accesibilidad web </h4>
            <h4>Aviso de Privacidad </h4>
            <h4>Condiciones de uso </h4>
            <h4>Mapa de sitio </h4>
            <h4>Preferencia sobre cookies</h4>
          </div>
          <div className="footer-copy">
            © 2024 Starbucks Coffee Company. Reservados todos los derechos
            <br />
            <span className="less">
              cl prod | f53ae8e650381950763a80fe1cfb39794326 | 13/06/2024 -
              06:17:26:32
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Acerca;
