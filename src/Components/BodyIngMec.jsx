/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Imagenes from "../Images/Imagenes";
import "../styles/BodyCarreras.css";

function BodyIngMec() {
  return (
    <div className="div_container-carreras">
      <div className="carerras_info">
        <h1>Ingenieria Mecanica.</h1>
        <ul>
          <li>
            <b>Titulo:</b> Grado - Ingeniería Mecánica 
          </li>
          <li>
            <b>Duración:</b> 5 años
          </li>
        </ul>
        <h4>¿Qué es la Ingeniería Mecánica?</h4>
        <p>
        La Ingeniería Mecánica es un campo muy amplio de la ingeniería que implica el uso de los principios de la física para el análisis, diseño, fabricación y mantenimiento de los sistemas mecánicos. Tradicionalmente, ha sido la rama de la Ingeniería que mediante la aplicación de los principios físicos ha permitido la creación de dispositivos útiles, como utensilios y máquinas. Las personas graduadas de ingeniería mecánica usan principios como el calor, la fuerza y la conservación de la masa y de la energía para analizar sistemas físicos, estáticos y dinámicos, contribuyendo a diseñar objetos. La Ingeniería Mecánica es la rama de las máquinas, equipos e instalaciones teniendo siempre en mente aspectos ecológicos y económicos para el beneficio de la sociedad.
        </p>
      </div>
      <img src={Imagenes.ingmec}></img>
    </div>
  );
}

export default BodyIngMec;
