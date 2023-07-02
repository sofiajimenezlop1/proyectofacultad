import React, { useState } from 'react'
import '../styles/Nav.css'
import { IoIosArrowDown } from 'react-icons/io';

import {Link} from 'react-router-dom';
function Nav() {

    const[Abrir, setAbrir] = useState(false);
    
    function Menu(){
      setAbrir(!Abrir);
    }; 
  

  return (
    <nav className='nav'>
        <ul className='nav_ul'>
          <li className='nav_ul_li'><Link to={"/"}>Inicio</Link></li>
          <button onClick={Menu} className="btn_ofAca">
            <li className='nav_ul_li'><a href="#">Oferta Académica <IoIosArrowDown/> </a></li>
      {
        Abrir &&(
          <>
            <div className='div_container-menu'>  
              <ul className='menu_lista'>
                <li className='menu_lista-titulo'>
                  <h4>Carreras de grado</h4>
                </li>
                <li><Link to={'/IngSis'}>Ingenieria en Sistema de Informacion</Link></li>
                <li><a href='#'>Ingenieria Mecanica</a></li>
                <li><a href='#'>Ingenieria Electronica</a></li>
              </ul>
              <ul className='menu_lista'>
                <li className='menu_lista-titulo'>
                  <h4>Carreras de pregrado</h4>
                </li>
                <li><a href='#'>Tecnicatura Universitaria en Programacion</a></li>
                <li><a href='#'>Tecnicatura Universitaria en Higuiene y seguridad</a></li>
                <li><a href='#'>Tecnicatura Universitaria en Mecatronica</a></li>
              </ul>
            </div>
          </>
        )
      }
          </button>
          <li className='nav_ul_li'><Link to="http://sysacad.frt.utn.edu.ar/" target="blank">Alumnos</Link></li>
        </ul>
    </nav>
  
        
  )


}

export default Nav;