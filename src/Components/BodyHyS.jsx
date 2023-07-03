/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Imagenes from "../Images/Imagenes";
import "../styles/BodyCarreras.css";

function BodyHyS() {
  return (
    <div className="div_container-carreras">
      <div className="carerras_info">
        <h1>Tecnicatura Universitaria en Higiene y Seguridad.</h1>
        <ul>
          <li>
            <b>Titulo:</b> Tecnicatura Universitaria en Higiene y Seguridad
          </li>
          <li>
            <b>Duración:</b> 3 años
          </li>
        </ul>
        <h4>¿Qué es la Higiene y Seguridad?</h4>
        <p>
          El término seguridad se le atribuye a la prevención y protección
          personal frente a los propios riesgos de una actividad laboral
          determinada. Por el contrario el término higiene proviene de la
          medicina y que tiene por objeto la conservación de la salud y prevenir
          a las personas de posibles enfermedades. En los lugares de trabajo
          existen situaciones peligrosas a las que los profesionales y usuarios
          se encuentran expuestos. De esta manera, interviene la seguridad e
          higiene en el área laboral, intentando que se cumplan las normas y
          legislaciones para evitar posibles accidentes de los empleado y
          eliminar los factores de riesgo en el trabajo. La seguridad e higiene
          en el trabajo, permite que se construya un medio ambiente de trabajo
          adecuado y justo. De este modo, los trabajadores pueden desarrollar su
          actividad en un ambiente seguro, sin riesgos de accidentes y con las
          condiciones de higiene necesarias para que se desarrolle la actividad.
        </p>
      </div>
      <img src={Imagenes.hys}></img>
    </div>
  );
}

export default BodyHyS;
