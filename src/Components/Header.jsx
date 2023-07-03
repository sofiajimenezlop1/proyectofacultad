/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {FiFacebook,FiTwitter,FiInstagram,FiYoutube} from 'react-icons/fi'
import '../styles/Header.css'
import Imagenes from '../Images/Imagenes';
function Header() {
    return(
        <header className='header'>
          <div className='header_div'>
            <img className='header_img' src={Imagenes.logo}/>
            <ul className="social-icons">
              <li><a href="#"><FiFacebook className="redes_icon"/></a></li>
              <li><a href="#"><FiTwitter className="redes_icon"/></a></li>
              <li><a href="#"><FiInstagram className="redes_icon"/></a></li>
              <li><a href="#"><FiYoutube className="redes_icon"/></a></li>
            </ul>

          </div>
          
      </header>
    )
}
export default Header;