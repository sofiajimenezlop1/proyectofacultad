/* eslint-disable jsx-a11y/anchor-is-valid */
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
            <li className='nav_ul_li'><a href="#">Oferta académica <IoIosArrowDown/> </a></li>
      {
        Abrir &&(
          <>
            <div className='div_container-menu'>  
              <ul className='menu_lista'>
                <li className='menu_lista-titulo'>
                  <h4>Carreras de grado</h4>
                </li>
                <li className='dropd'><Link to={'/IngSis'}>Ingenieria en Sistemas de Informacion</Link></li>
                <li className='dropd'><Link to={'/IngMec'}>Ingenieria Mecanica</Link></li>
                <li className='dropd'><Link to={'/IngElec'}>Ingenieria Electronica</Link></li>
              </ul>
              <ul className='menu_lista'>
                <li className='menu_lista-titulo'>
                  <h4>Carreras de pregrado</h4>
                </li>
                <li className='dropd'><Link to={'/Prog'}>Tecnicatura Superior en Programacion</Link></li>
                <li className='dropd'><Link to={'/HyS'}>Tecnicatura Universitaria en Higuiene y seguridad</Link></li>
                <li className='dropd'><Link to={'/Mecatronica'}>Tecnicatura Universitaria en Mecatronica</Link></li>
                <li className='dropd'><Link to={'/Mecatronica'}>Tecnicatura Universitaria en Logistica</Link></li>
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