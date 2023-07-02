import React from "react";
import "../styles/Footer.css";
import Imagenes from "../Images/Imagenes";

import { FaEnvelope } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { FiMapPin } from "react-icons/fi";

import Button from 'react-bootstrap/Button';

function Footer() {
  return (
    <footer className="footer">
      <div className="logofooter">
        <img src={Imagenes.logofooter}></img>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>Extension Aulica Concepcion</h5>
            <h6>Contacto</h6>
            <p>
              <FiMapPin /> Dirección: 4146, Concepción, Argentina
            </p>
            <p>
              <FiPhone /> Teléfono: +1 3865 455002
            </p>
            <p>
              <FaEnvelope /> Email: info@universidadabc.edu
            </p>
          </div>
          <div className="form-container">
            <form className="footer__form">
              <div className="form__section">
                <input
                  type="text"
                  className="form__imput"
                  placeholder="Nombre"
                />
              </div>
              <div className="form__section">
                <input
                  type="email"
                  className="form__imput"
                  placeholder="Mail"
                />
              </div>
              <div className="form__section">
                <textarea
                  className="form__imput"
                  placeholder="Escriba su consulta"
                ></textarea>
              </div>
              <div>
                <Button variant="light">Enviar</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p className="text-center">
                © {new Date().getFullYear()} Universidad Tecnologica Nacional. Todos los derechos
                reservados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
