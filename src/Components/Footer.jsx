/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "../styles/Footer.css";
import Imagenes from "../Images/Imagenes";

import { FaEnvelope } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { FiMapPin } from "react-icons/fi";

import { useForm } from "react-hook-form";

import Button from "react-bootstrap/Button";

function Footer() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert("formulario enviado correctamente");
  };

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
              <FiMapPin /> Dirección: Raul Alfonsin 70, Concepción/Tucuman
            </p>
            <p>
              <FiPhone /> Teléfono: +54 9 3865-455002
            </p>
            <p>
              <FaEnvelope /> Email: info@unifrtconcep.edu.com.ar
            </p>
          </div>
          <div className="form-container">
            <form className="footer__form" onSubmit={handleSubmit(onSubmit)}>
              <div className="form__section">
                <input
                  type="text"
                  className="form__imput"
                  placeholder="Nombre"
                  name="nombre"
                  {...register("nombre", {
                    required: true,
                    maxLength: 30,
                  })}
                />
                  {errors.nombre?.type === 'required' && <p className='p-error'>El campo nombre es obligatorio </p>}
                  {errors.nombre?.type === 'maxLength' && <p>El campo nombre no puede tener mas de 30 caracteres </p>}
              </div>
              <div className="form__section">
                <input
                  type="email"
                  className="form__imput"
                  placeholder="Mail"
                  {...register('email', {required: true})} 
                />
                {errors.email?.type === 'required' && <p className='p-error'>El campo email es obligatorio </p>}
              </div>
              <div className="form__section">
                <textarea
                  className="form__imput"
                  placeholder="Escriba su consulta"
                ></textarea>
              </div>
              <div>
                <Button variant="light" type="submit" value="enviar">Enviar</Button>
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
                © {new Date().getFullYear()} Universidad Tecnologica Nacional.
                Todos los derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
