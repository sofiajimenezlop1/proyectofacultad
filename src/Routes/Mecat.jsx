import React from 'react'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Nav from '../Components/Nav';
import BodyMecat from '../Components/BodyMecat';

function Mecat(){
  return (
    <div>
        <Header/>
        <Nav/>
        <BodyMecat/>
        <Footer/>
    </div>
  )
}

export default Mecat;
