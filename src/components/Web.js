import React from 'react';
import Encabezado from './Encabezado';
import Banner from './Banner';
function Web(){
  return (
    <div className="container">
     <h1>Bienvenido a nuestro primer proyecto en React</h1>
     <Encabezado />
     <Banner />
    </div>
  )

}
export default Web;