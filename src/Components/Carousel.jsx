import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Imagenes from '../Images/Imagenes'
import '../styles/Carousel.css'

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Carousel1 = () => {
  

  return (
    <Carousel className="my-carousel">
      <div>
        <img src={Imagenes.facultadentrada} alt="Descripción de la imagen 1" />
        <p className="legend">Leyenda 1</p>
      </div>
      <div>
        <img src={Imagenes.facutad} alt="Descripción de la imagen 2" />
        <p className="legend">Leyenda 2</p>
      </div>
      <div>
        <img src={Imagenes.facultadfondo} alt="Descripción de la imagen 3" />
        <p className="legend">Leyenda 3</p>
      </div>
      <div>
        <img src={Imagenes.facultadpasillo} alt="Descripción de la imagen 3" />
        <p className="legend">Leyenda 3</p>
      </div>
    </Carousel>
  );
};
export default Carousel1;
