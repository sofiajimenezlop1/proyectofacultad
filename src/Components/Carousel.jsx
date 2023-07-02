/*import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Imagenes from '../Images/Imagenes'
import '../styles/Carousel.css'

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Carousel1 = () => {
  

  return (
    <div className="div_container-carousel">
      <Carousel className="my-carousel">
        <div>
          <img src={Imagenes.facultadentrada} alt="Descripción de la imagen 1" />
        </div>
        <div>
          <img src={Imagenes.facutad} alt="Descripción de la imagen 2" />
        </div>
        <div>
          <img src={Imagenes.facultadfondo} alt="Descripción de la imagen 3" />
        </div>
        <div>
          <img src={Imagenes.facultadpasillo} alt="Descripción de la imagen 3" />
        </div>
      </Carousel>
    </div>
  );
};
export default Carousel1;*/

import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Imagenes from '../Images/Imagenes'
import '../styles/Carousel.css'

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='div_container-carousel'>
    <div className='div_container-car'>
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Imagenes.facultadentrada}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Imagenes.facutad}
          alt="Second slide"
        />


      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Imagenes.facultadpasillo}
          alt="Third slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Imagenes.facultadfondo}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
    </div>
  );
}

export default ControlledCarousel;