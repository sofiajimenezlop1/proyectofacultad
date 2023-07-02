import React from 'react'
import Header from '../Components/Header';
import Body from '../Components/Body';
import Footer from '../Components/Footer';
import Nav from '../Components/Nav';
import"bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <div>
        <Header/>
        <Nav />
        <Body>
        </Body>
        <Footer/>
    </div>
  )
}

export default Home;