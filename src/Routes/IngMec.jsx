import React from 'react'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Nav from '../Components/Nav';
import BodyIngMec from '../Components/BodyIngMec';

function IngMec(){
  return (
    <div>
        <Header/>
        <Nav/>
        <BodyIngMec/>
        <Footer/>
    </div>
  )
}

export default IngMec;
