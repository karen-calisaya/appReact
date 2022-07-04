import React from "react";
import logo from '../assets/img/logo-DH.png';
function Encabezado(){
    return (
        <div>
            <header className="encabezado">
                <nav id="logo">
                    <a href="#image"><img src={logo} alt="Logo Digital House"/></a>
                </nav>
                <nav id="opciones">
                    <ul>
                        <li><a href="#home">Inicio</a></li>
                        <li><a href="#sobreNosotros">Nosotros</a></li>
                        <li><a href="#productos">Productos</a></li>
                        <li><a href="#contacto">Contacto</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Encabezado; 