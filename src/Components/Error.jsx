/* eslint-disable jsx-a11y/alt-text */
import Imagenes from "../Images/Imagenes";
import React from 'react'

const error = () => {
    const imgStyle ={
        width: '100%',
    }
  return (
    <div className="error">
        <img src = {Imagenes.error} style={imgStyle}></img>
    </div>
  )
}

export default error