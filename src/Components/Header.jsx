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
              <li><a href="https://www.facebook.com/profile.php?id=100063607237824" target='blank'><FiFacebook className="redes_icon"/></a></li>
              <li><a href=" https://twitter.com/utntucuman?t=bAIm6Uye2DypH1tCpgmKIQ&s=08 " target='blank'><FiTwitter className="redes_icon"/></a></li>
              <li><a href="https://www.instagram.com/utntucuman/" target='blank'><FiInstagram className="redes_icon"/></a></li>
              <li><a href="https://www.youtube.com/@UTNFRT" target='blank'><FiYoutube className="redes_icon"/></a></li>
            </ul>

          </div>
          
      </header>
    )
}
export default Header;