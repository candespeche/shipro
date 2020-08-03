import React from "react";
import style from "./navbar.module.css";
import logo from "../../assets/shipro-logo.svg"

function Navbar() {
    return (
        <div className={style.navbarContainer}>
            <img className={style.logo} src={logo} alt="Shipro" />
            <div className={style.links}>
                <p>Conocenos</p>
                <p>Nuestro sistema</p>
                <svg xmlns="http://www.w3.org/2000/svg" className={style.fstSvg} width="31.356" height="24.856" viewBox="0 0 31.356 24.856">
                    <g id="Icon_feather-mail" data-name="Icon feather-mail" transform="translate(1.393 1)">
                        <path id="Trazado_30" data-name="Trazado 30" d="M5.857,6H28.713A2.865,2.865,0,0,1,31.57,8.857V26a2.865,2.865,0,0,1-2.857,2.857H5.857A2.865,2.865,0,0,1,3,26V8.857A2.865,2.865,0,0,1,5.857,6Z" transform="translate(-3 -6)" fill="none" strokeLinejoin="round" strokeWidth="2.3" />
                        <path id="Trazado_31" data-name="Trazado 31" d="M31.57,9,17.285,19,3,9" transform="translate(-3 -6.143)" fill="none" strokeLinejoin="round" strokeWidth="2.3" />
                    </g>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="27" viewBox="0 0 26 29">
                    <g id="Icon_feather-user" data-name="Icon feather-user" transform="translate(-5 -3.5)">
                        <path id="Trazado_97" data-name="Trazado 97" d="M30,31.5v-3a6,6,0,0,0-6-6H12a6,6,0,0,0-6,6v3" fill="none" strokeLinejoin="round" strokeWidth="2.4" />
                        <path id="Trazado_98" data-name="Trazado 98" d="M24,10.5a6,6,0,1,1-6-6,6,6,0,0,1,6,6Z" fill="none" strokeLinejoin="round" strokeWidth="2.4" />
                    </g>
                </svg>
            </div>
        </div>
    )
}
export default Navbar