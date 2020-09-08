import React from "react";
import styles from "./footer.module.css"
import logo from "../../../assets/shipro-logo.svg"
import { Link } from "react-router-dom"
function Footer() {
    return (
        <div>
            <div className={styles.blueContainer}>
                <div className={styles.divsBlue}>
                    <img src={logo} alt="Shipro" />
                    <div className={styles.divsLinks}>
                        <a className={styles.links} href="#">Nuestra documentación</a>
                        <a className={styles.links} href="/faqs">FAQs</a>
                        <a className={styles.links} href="#">Tecnologías y pluggins</a>
                        <a className={styles.links} href="#">Contacto</a>
                        <a className={styles.links} href="#">Iniciar sesión</a>
                        <a className={styles.links} href="mailto:operaciones@shipro.pro">Pedí tu demo</a>
                    </div>
                </div>
                <div className={styles.aligncopyright}>
                    <p className={styles.copyright}> Copyright 2016  Shipro© All Rights reserved. Shipro no es una empresa de transporte ni entrega de mercaderías.
                    </p>
                </div>
            </div>
            <div className={styles.grayContainer}>
                <div className={styles.divs}>
                    <h2>CONTACTO<br />
                        —
                        </h2>
                    <div>
                        <Link onClick={(event) => { event.preventDefault(); window.open("https://www.google.com/maps/place/Juan+P.+Esnaola+2647,+B1643+B%C3%A9ccar,+Provincia+de+Buenos+Aires/@-34.4674494,-58.5591375,17z/data=!3m1!4b1!4m5!3m4!1s0x95bca555261da917:0xd27a4311aec397ba!8m2!3d-34.4674494!4d-58.5569488"); }} to="https://www.google.com/maps/place/Juan+P.+Esnaola+2647,+B1643+B%C3%A9ccar,+Provincia+de+Buenos+Aires/@-34.4674494,-58.5591375,17z/data=!3m1!4b1!4m5!3m4!1s0x95bca555261da917:0xd27a4311aec397ba!8m2!3d-34.4674494!4d-58.5569488" target="_blank">Juan P. Esnaola 2647,<br />
                        (CP 1643) Béccar,<br />
                        Buenos Aires, Argentina.</Link>
                        <br /><br />
                        <a href="mailto:operaciones@shipro.pro">operaciones@shipro.pro</a>
                        <br /><br />
                        <a href="tel:+541152779990">011 5277-9990</a>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default Footer;