/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Imagenes from "../Images/Imagenes";
import "../styles/BodyCarreras.css";

function BodyProg() {
  return (
    <div className="div_container-carreras">
      <div className="carerras_info">
        <h1>Tecnicatura Universitaria en Programacion.</h1>
        <ul>
          <li>
            <b>Titulo:</b>Tecnicatura Universitaria en Programacion
          </li>
          <li>
            <b>Duración:</b> 2 años
          </li>
        </ul>
        <h4>¿Qué es la Programacion? </h4>
        <p>
          La programación es el proceso de crear un conjunto de instrucciones
          que le dicen a una computadora como realizar algún tipo de tarea. Pero
          no solo la acción de escribir un código para que la computadora o el
          software lo ejecute. Incluye, además, todas las tareas necesarias para
          que el código funcione correctamente y cumpla el objetivo para el cual
          se escribió. En la actualidad, la noción de programación se
          encuentra muy asociada a la creación de aplicaciones de informática y
          videojuegos. En este sentido, es el proceso por el cual una persona
          desarrolla un programa, valiéndose de una herramienta que le permita
          escribir el código (el cual puede estar en uno o varios lenguajes,
          como C++, Java y Python, entre muchos otros) y de otra que sea capaz
          de “traducirlo” a lo que se conoce como lenguaje de máquina, que puede
          "comprender" el microprocesador.
        </p>
      </div>
      <img src={Imagenes.prog}></img>
    </div>
  );
}

export default BodyProg;
