/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Imagenes from "../Images/Imagenes";
import "../styles/BodyCarreras.css";

function BodyIngElec() {
  return (
    <div className="div_container-carreras">
      <div className="carerras_info">
        <h1>Ingenieria Electronica.</h1>
        <ul>
          <li>
            <b>Titulo:</b> Grado - Ingenieria Electronica 
          </li>
          <li>
            <b>Duración:</b> 5 años
          </li>
        </ul>
        <h4>¿Qué es la Ingeniería Electronica?</h4>
        <p>
        La carrera prepara profesionales con una sólida formación científica y tecnológica capacitados en: Planear, diseñar, fabricar, mantener y manejar sistemas, equipos y componentes electrónicos, con creatividad y espíritu crítico, teniendo presente el desarrollo tecnológico. Estudiar, construir, operar, reparar e inspeccionar sistemas, subsistemas, componentes, piezas de generación, transmisión, recepción, distribución, conversión, control, medición, automatización, registro, reproducción, procesamiento y/o utilización de señales electromagnéticas, ópticas, acústicas o de otro tipo en todas las frecuencias o potencias. Proyectar, dirigir, ejecutar, sistemas de enlace de comunicaciones, de procesamiento electrónico de datos -hardware- incluyendo su programación -software-. Entender en asuntos de Ingeniería legal, económica y financiera, realizar arbitrajes y pericias, tasaciones y valuaciones referidas a lo específico de la especialidad en los recursos humanos involucrados y en la enseñanza de los conocimientos tecnológicos y científicos correspondientes.
        ¿Qué se estudia? Luego de la formación básica, algunas materias indicativas de la carrera son: Análisis de Circuitos; Señales y Sistemas; Circuitos Electrónicos; Circuitos Digitales y Microprocesadores; Electromagnetismo; Control de Proceso; Control de Potencia; Sistemas de Comunicación; Legislación y Ejercicio Profesional y materias optativas.
        </p>
      </div>
      <img src={Imagenes.ingelec}></img>
    </div>
  );
}

export default BodyIngElec;
