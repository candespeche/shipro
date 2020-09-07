import React from "react";
import styles from "./clientes.module.css"
import clientes01 from "../../../assets/clientes01.png"
import clientes02 from "../../../assets/clientes02.png"
import clientes03 from "../../../assets/clientes03.png"
import clientes04 from "../../../assets/clientes04.png"
import clientes05 from "../../../assets/clientes05.png"
import clientes06 from "../../../assets/clientes06.png"
import clientes07 from "../../../assets/clientes07.png"

function Clientes() {
    return (
        <div className={styles.clientesContainer}>
            <div className={styles.txtContainer}>
                <h1 className={styles.titleClientes}>Más que clientes,<br />aliados.</h1>
                <div className={styles.orangeDivisor}></div>
                <p className={styles.textQuees}>Somos tus aliados en tu negocio. Si a vos te va bien, a nosotros también. Nos interesa el feedback de todos nuestros usuarios para tener la herramienta más intuitiva y escalable del mercado.<br />
                    <a href="mailto:shipro@shipro.pro" className={styles.demo}>—<br />
                ¡Pedí tu demo y contanos qué te parece!</a>
                </p>
            </div>
            <div className={styles.logosClientes}>
                <div className={styles.logos01}>
                    <img src={clientes01} alt="tiendanube" />
                    <img src={clientes02} alt="magento" />
                    <img src={clientes04} alt="woocommerce" />
                </div>
                <div className={styles.logos02}>
                    <img src={clientes03} alt="fasttrack" />
                    <img src={clientes05} alt="mailex" />
                    <img src={clientes06} alt="realexpress" />
                    <img src={clientes07} alt="ups" />
                </div>
            </div>
        </div>
    )
}

export default Clientes