import React from "react";

import '../styles/Footer.css'

function Footer(){
    return(
        <footer>
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <p>Derechos de autor © 2023 - Todos los derechos reservados</p>
          </div>
          <div className="col-sm-6">
            <ul className="list-inline">
              <li><a href="#">Inicio</a></li>
              <li><a href="#">Servicios</a></li>
              <li><a href="#">Acerca de</a></li>
              <li><a href="#">Contacto</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    )
}
export default Footer;