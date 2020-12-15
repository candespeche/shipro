import React from "react";
import styles from "./footer.module.scss"
import logo from "../../../assets/shipro-logo.svg"
import { Link } from "react-router-dom";
import { useState } from "react";
var Scroll = require('react-scroll');
var LinkScroll = Scroll.link;

function Footer() {
    return (
        <div className={styles.mobileContainer}>
            <div className={styles.blueContainer}>
                <div className={styles.divsBlue}>
                    <img alt="Shipro" src={logo} />
                    <div className={styles.divsLinks}>
                        <a className={styles.links} target="_blank" rel="noopener noreferrer" href="https://shipro.pro/docs/">Nuestra documentación</a>
                        <Link className={styles.links} rel="noopener noreferer" to="/faqs">FAQs</Link>
                        <a className={styles.links} target="_blank" rel="noopener noreferrer" href="https://shipro.pro/login">Iniciar sesión</a>
                        <Link className={styles.links} rel="noopener noreferer" to="/solicitar-demo">Pedí tu demo</Link>
                    </div>
                </div>
                <div className={styles.aligncopyright}>
                    <p className={styles.copyright}> Copyright 2020 - Shipro© All Rights reserved. Shipro no es una empresa de transporte ni entrega de mercaderías.
                    </p>
                </div>
            </div>
            <div className={styles.grayContainer}>
                <div className={styles.divs}>
                    <h2>CONTACTO<br />
                        —
                        </h2>
                    <div>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/place/Juan+P.+Esnaola+2647,+B1643+B%C3%A9ccar,+Provincia+de+Buenos+Aires/data=!4m2!3m1!1s0x95bca555261da917:0xd27a4311aec397ba?sa=X&ved=2ahUKEwj07vemg7DsAhW-D7kGHf9pBjcQ8gEwAHoECAwQAQ">Juan P. Esnaola 2647,<br />
                        (CP 1643) Béccar,<br />
                        Buenos Aires, Argentina.</a>
                        <br /><br />
                        <a href="mailto:operaciones@shipro.pro">operaciones@shipro.pro</a>
                        <br /><br />
                        <a href="tel:+5491152779990">011 5277-9990</a>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default Footer;
