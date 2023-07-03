/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Imagenes from "../Images/Imagenes";
import "../styles/BodyCarreras.css";

function BodyIngSis() {
  return (
    <div className="div_container-carreras">
      <div className="carerras_info">
        <h1>Ingenieria en Sistemas de Informacion.</h1>
        <ul>
          <li>
            <b>Titulo:</b> Grado - Ingeniería en Sistemas de Información
          </li>
          <li>
            <b>Duración:</b> 5 años
          </li>
          <li>
            <b>Título Intermedio:</b> Analista Universitario de Sistemas
          </li>
          <li>
            <b>Duración:</b> 3 años
          </li>
        </ul>
        <h4>¿Qué es la Ingeniería en Sistemas de Información? </h4>
        <p>
          La Ingeniería en
          Sistemas de Información se ocupa del diseño (desarrollo creativo de
          una idea), implementación (idea que se materializa), organización y
          control de la información requerida por organismos públicos y
          privados. En esta ingeniería convergen diversos campos de
          conocimiento: matemática, programación, gestión de datos, software,
          hardware y redes. También se ocupa de estudios de factibilidad (se
          puede hacer o no), presupuestación (cuánto cuesta), dirección (cómo
          realizamos el diseño propuesto) y proyectos vinculados con los
          sistemas de información de una organización.
        </p>
      </div>
      <img src={Imagenes.ingsis}></img>
    </div>
  );
}

export default BodyIngSis;
