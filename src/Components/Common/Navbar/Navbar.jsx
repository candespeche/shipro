import React from "react";
import style from "./navbar.module.scss";
import logo from "../../../assets/shipro-logo.svg"
import { Link } from "react-router-dom";
import { useState } from "react";
var Scroll = require('react-scroll');
var LinkScroll = Scroll.Link;

function Navbar({ home }) {
    let [hover, setHover] = useState(false)
    let [burger, setBurger] = useState(false)
    let [hover2, setHover2] = useState(false)
    let hover3 = false
    // let [hover3, setHover3] = useState(false)
    let handleBurger = () => {
        setBurger(!burger)
    }
    return (
        <>
            <div className={home ? style.navbarContainerHome : style.navbarContainer}>
                <Link to={"/"}>
                    <img className={home ? style.logoH : style.logo} href="/" src={logo} alt="Shipro" />
                </Link>
                <div className={style.burgerContainer}>
                    <div className={home ? style.linksHome : style.links}>
                        <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                            <p className={hover ? style.hoveronp : style.hoveroffp}>Conocenos</p>
                            <div className={hover ? style.hover1on : style.hover1off}>
                                <ul>
                                    <LinkScroll
                                        to="quees"
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                    >
                                        <li>Qué es Shipro</li>
                                    </LinkScroll>
                                    <LinkScroll
                                        to="comoes"
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                    >
                                        <li>Cómo es el servicio</li>
                                    </LinkScroll>
                                    <LinkScroll
                                        to="partners"
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                    >
                                        <li>Nuestros partners</li>
                                    </LinkScroll>
                                </ul>
                            </div>
                        </div>
                        <div onMouseEnter={() => setHover2(true)} onMouseLeave={() => setHover2(false)}>
                            <p className={hover2 ? style.hover2onp : style.links}>Nuestro sistema</p>
                            <div className={hover2 ? style.hover2on : style.hover2off}>
                                <ul>
                                    <li><a href="http://shipro.pro/docs">Nuestra documentación</a></li>
                                    <li><Link to="/faqs">Preguntas frecuentes</Link></li>
                                    {/* <li>Tecnologías y pluggins</li> */}
                                </ul>
                            </div>
                        </div>
                        <a href="mailto:contacto@shipro.pro">
                            <svg xmlns="http://www.w3.org/2000/svg" className={style.fstSvg} width="31.356" height="24.856" viewBox="0 0 31.356 24.856">
                                <g id="Icon_feather-mail" data-name="Icon feather-mail" transform="translate(1.393 1)">
                                    <path id="Trazado_30" data-name="Trazado 30" d="M5.857,6H28.713A2.865,2.865,0,0,1,31.57,8.857V26a2.865,2.865,0,0,1-2.857,2.857H5.857A2.865,2.865,0,0,1,3,26V8.857A2.865,2.865,0,0,1,5.857,6Z" transform="translate(-3 -6)" fill="none" strokeLinejoin="round" strokeWidth="2.3" />
                                    <path id="Trazado_31" data-name="Trazado 31" d="M31.57,9,17.285,19,3,9" transform="translate(-3 -6.143)" fill="none" strokeLinejoin="round" strokeWidth="2.3" />
                                </g>
                            </svg>
                        </a>
                        {/* <div onMouseEnter={() => setHover3(true)} onMouseLeave={() => setHover3(false)}> */}
                        <a target="_blank" rel="noopener noreferrer" href="http://shipro.pro/login">
                            <svg className={hover3 ? style.hover3onp : style.hover3offp} xmlns="http://www.w3.org/2000/svg" width="26" height="27" viewBox="0 0 26 29">
                                <g id="Icon_feather-user" data-name="Icon feather-user" transform="translate(-5 -3.5)">
                                    <path id="Trazado_97" data-name="Trazado 97" d="M30,31.5v-3a6,6,0,0,0-6-6H12a6,6,0,0,0-6,6v3" fill="none" strokeLinejoin="round" strokeWidth="2.4" />
                                    <path id="Trazado_98" data-name="Trazado 98" d="M24,10.5a6,6,0,1,1-6-6,6,6,0,0,1,6,6Z" fill="none" strokeLinejoin="round" strokeWidth="2.4" />
                                </g>
                            </svg>
                            {/* <div className={hover3 ? style.hover3on : style.hover3off}>
                        <ul>
                            <li><a href="http://shipro.pro/login">Iniciar sesión</a></li>
                            <li>Registrarme</li>
                        </ul>
                    </div> */}
                            {/* </div> */}
                        </a>
                    </div>
                </div>

            </div>
            <div className={burger ? style.burgerContainerShow : style.burgerContainerHide} >
                <div onClick={() => handleBurger()} className={burger ? style.closeIconCont : style.burgerIconCont}>
                    <div className={style.burgerIcon1}></div>
                    <div className={style.burgerIcon2}></div>
                    <div className={style.burgerIcon3}></div>
                </div>
                <a className={style.firstLink} href="mailto:contacto@shipro.pro">Contactanos</a>
                <a href="http://shipro.pro/docs">Nuestra documentación</a>
                <Link to="/faqs">Preguntas frecuentes</Link>
                <a href="http://shipro.pro/login">Iniciar sesión</a>
            </div>
        </>
    )
}

export default Navbar