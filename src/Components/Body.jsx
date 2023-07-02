import React from "react";
import Carousel from "./Carousel";

import "../styles/Body.css";
import Imagenes from "../Images/Imagenes";
/*function Body(){
    return(
        <>
        <Carousel></Carousel>
        <main className='main'>
            <div className='div_container'>
                <div className='div_container-carreras'>
                    <div className='div_container-img'>
                        <img src={Imagenes.sistemas}></img>
                    </div>
                    <div className='description'>
                        <h3>Ingenieria en Sistemas de informacion</h3>
                    </div>
                </div>
                <div className='div_container-carreras'>
                    <div className='div_container-img'>
                        <img src={Imagenes.mecanica}></img>
                    </div>
                    <div className='description'>
                        <h3>Ingenieria Mecanica</h3>
                    </div>
                </div>
                <div className='div_container-carreras'>
                    <div className='div_container-img'>
                        <img src={Imagenes.electronica}></img>
                    </div>
                    <div className='description'>
                        <h3>Ingenieria Electronica</h3>
                    </div>
                </div>
                <div className='div_container-carreras'>
                    <div className='div_container-img'>
                        <img src={Imagenes.programacion}></img>
                    </div>
                    <div className='description'>
                        <h3>Tecnicatura Universitaria en Programacion</h3>
                    </div>
                </div>
                <div className='div_container-carreras'>
                    <div className='div_container-img'>
                        <img src={Imagenes.mecatronica}></img>
                    </div>
                    <div className='description'>
                        <h3>Tecnicatura Universitaria en Mecatronica</h3>
                    </div>
                </div>
                <div className='div_container-carreras'>
                    <div className='div_container-img'>
                        <img src={Imagenes.higieneyseg}></img>
                    </div>
                    <div className='description'>
                        <h3>Tecnicatura Universitaria en Higiene y Seguridad</h3>
                    </div>
                </div>
            </div>
    
        </main>
        </>
    )
}
export default Body;*/
/*import Card from 'react-bootstrap/Card';

function ImgOverlayExample() {
  return (
    <>
    <Carousel/>
    <div className='div_container-cartas'>
    <Card className="bg-dark text-white">
      <Card.Img src={Imagenes.higieneyseg} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Tecnicatura Universitaria en Higiene y Seguridad</Card.Title>
        <Card.Text>
        La Tecnicatura en Higiene y Seguridad tiene como objetivo formar profesionales con idoneidad para para promover condiciones higiénicas, métodos y procedimientos seguros en ambientes de distinto tipo, a fin de que actividades de variada naturaleza se desarrollen con los mínimos riesgos para la salud de las personas.
        </Card.Text>
        <Card.Text>3 años</Card.Text>
      </Card.ImgOverlay>
    </Card>
    </div>
    
    
    </>
  );
}


export default ImgOverlayExample;*/

import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { FacebookProvider, Page } from "react-facebook";

function GroupExample() {
  return (
    <>
      <Carousel />
      <main>
        <article className="container-cards">
          <h4 className="title_h2">Carreras de grado</h4>
          <CardGroup>
            <Card>
              <Card.Img variant="top" src={Imagenes.mecanica} />
              <Card.Body>
                <Card.Title>Ingenieria Mecanica</Card.Title>
                <Card.Text>
                  El ingeniero mecánico está capacitado para: Diseñar e instalar
                  equipos mecánicos o térmicos; seleccionar sus componentes,
                  especificar materiales, costos y duración de la ejecución.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">5 Años</small>
              </Card.Footer>
            </Card>
            <Card >
              <Card.Img variant="top" src={Imagenes.sistemas} />
              <Card.Body>
                <Card.Title>Ingenieria en Sistemas de informacion</Card.Title>
                <Card.Text>
                  Los ingenieros de sistemas supervisan todos los aspectos de un
                  proyecto o sistema en una variedad de campos, como software,
                  transporte, desarrollo de productos y fabricación.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">5 Años</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src={Imagenes.electronica} />
              <Card.Body>
                <Card.Title>Ingenieria Electronica</Card.Title>
                <Card.Text>
                  Un ingeniero electrónico es un profesional multidisciplinar
                  que se ocupa de diseñar, desarrollar, probar y supervisar la
                  fabricación de equipos eléctricos.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">5 Años</small>
              </Card.Footer>
            </Card>
          </CardGroup>
          <h4 className="title_h2">Carreras de pregrado</h4>
          <CardGroup>
            <Card>
              <Card.Img variant="top" src={Imagenes.programacion} />
              <Card.Body>
                <Card.Title>
                  Tecnicatura Universitaria en Programacion
                </Card.Title>
                <Card.Text>
                  La Tecnicatura Universitaria en Programación es la disciplina
                  académica que aborda los lenguajes de programación de
                  computadoras de uso más frecuentes, el manejo de técnicas de
                  programación y sus recursos.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">2 Años</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src={Imagenes.mecatronica} />
              <Card.Body>
                <Card.Title>
                  Tecnicatura Universitaria en Mecatronica
                </Card.Title>
                <Card.Text>
                  Una formación rigurosamente tecnológica que combina los
                  conocimientos de las Ciencias Básicas con los correspondientes
                  a Electrónica, Mecánica, Electrotecnia e Informática.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">3 Años</small>
              </Card.Footer>
            </Card>
            <Card className="red">
              <Card.Img variant="top" src={Imagenes.higieneyseg} />
              <Card.Body>
                <Card.Title>
                  Tecnicatura Universitaria en Higiene y Seguridad
                </Card.Title>
                <Card.Text>
                  Esta tecnicatura universitaria capacita a los estudiantes en
                  diferentes ámbitos laborales y los prepara para evaluar y
                  controlar situaciones inherentes a riesgos de contaminación
                  química, biológica, radioactiva y otros riesgos del trabajo.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">3 Años</small>
              </Card.Footer>
            </Card>
          </CardGroup>
        </article>
        <aside className="aside">
          <div className="div_Face">
            <FacebookProvider appId="133061186450355">
              <Page
                href="https://www.facebook.com/profile.php?id=100063607237824"
                tabs="timeline"
              />
            </FacebookProvider>
          </div>
        </aside>
      </main>
    </>
  );
}

export default GroupExample;
