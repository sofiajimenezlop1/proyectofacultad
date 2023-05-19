import React from 'react'

import'../styles/Body.css';
import Imagenes from '../Images/Imagenes';
function Body(){
    return(
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
    )
}
export default Body;
