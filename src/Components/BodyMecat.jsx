/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Imagenes from "../Images/Imagenes";
import "../styles/BodyCarreras.css";

function Mecat() {
  return (
    <div className="div_container-carreras">
      <div className="carerras_info">
        <h1>Tecnicatura Universitaria en Mecatronica.</h1>
        <ul>
          <li>
            <b>Titulo:</b>Tecnicatura Universitaria en Mecatronica.
          </li>
          <li>
            <b>Duración:</b> 2 años
          </li>
        </ul>
        <h4>¿Qué es la Mecatronica? </h4>
        <p>
        La ingeniería mecatrónica, o simplemente mecatrónica, es una rama multidisciplinaria de la ingeniería, la cual desarrolla dispositivos y tecnologías de varios campos del conocimiento en los que se unen las ramas de sistemas, electrónica, mecánica y control, con el uso combinado de la robótica y de la ingeniería electrónica y ciencia de la Computación/Sistemas. La mecatrónica engloba así el desarrollo de productos que involucren un sistema de control para productos o procesos inteligentes, lo cual busca crear maquinaria más compleja para facilitar las actividades del ser humano a través de procesos electrónicos de sistemas de control aplicados en la industria. Esta disciplina une la Ingeniería de sistemas/ciencia de la computación,ingeniería electrónica, ingeniería mecánica e ingeniería de control.
        </p>
      </div>
      <img src={Imagenes.mecat}></img>
    </div>
  );
}

export default Mecat;
