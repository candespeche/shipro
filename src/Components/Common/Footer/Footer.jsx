import React from "react";
import styles from "./footer.module.css"
import logo from "../../../assets/shipro-logo.svg"
function Footer() {
    return (
        <div>
            <div className={styles.blueContainer}>
                <div className={styles.divsBlue}>
                    <img src={logo} />
                    <div className={styles.divsLinks}>
                        <a className={styles.links}>Nuestra documentación</a>
                        <a className={styles.links} href="/faqs">FAQs</a>
                        <a className={styles.links}>Tecnologías y pluggins</a>
                        <a className={styles.links}>Contacto</a>
                        <a className={styles.links}>Iniciar sesión</a>
                        <a className={styles.links}>Pedí tu demo</a>
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
                        <a>Juan P. Esnaola 2647,<br />
                        (CP 1643) Béccar,<br />
                        Buenos Aires, Argentina.</a>
                        <br /><br />
                        <a href="mailto:operaciones@shipro.pro">operaciones@shipro.pro</a>
                        <br /><br />
                        <a>011 5277-9990</a>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default Footer;