import React from "react";
import logo from '../assets/img/logo-DH.png'
function Footer(props){
    return(
        <div>
            <footer  className="pie">
                <nav id="logo">
                    <a href="#image"><img src={logo} alt="Logo Digital House"/></a>
                </nav>
                <nav id="opciones">
                    <ul>
                        <li><a href="#facebook">Facebook</a></li>
                        <li><a href="#instagram">Instagram</a></li>
                        <li><a href="#instagram">{props.titulo}</a></li>
                    </ul>
                </nav>
            </footer>
        </div>
    );
}
export default Footer;