import React, { useState } from 'react'
import '../styles/Nav.css'
import { IoIosArrowDown } from 'react-icons/io';

function Nav() {

    const[Abrir, setAbrir] = useState(false);
    
    function Menu(){
      setAbrir(!Abrir);
    }; 
  

  return (
    <nav className='nav'>
        <ul className='nav_ul'>
          <li className='nav_ul_li'><a href="#">Inicio</a></li>
          <button onClick={Menu} className="btn_ofAca">
            <li className='nav_ul_li'><a href="#">Oferta Académica <IoIosArrowDown/> </a></li>
          {
            Abrir &&(
              <ul className='menu_lista'>
                <li><a href='#'>Ingenieria en Sistema</a></li>
                <li><a href='#'>Ingenieria Mecanica</a></li>
                <li><a href='#'>Ingenieria Electronica</a></li>
                <li><a href='#'>Tecnicatura en Programacion</a></li>
                <li><a href='#'>Tecnicatura Higuiene y seguridad</a></li>
                <li><a href='#'>Tecnicatura Mecatronica</a></li>
              </ul>
            )
          }
          </button>
          <li className='nav_ul_li'><a href="#">Alumnos</a></li>
        </ul>
    </nav>
  
        
  )


}

export default Nav;