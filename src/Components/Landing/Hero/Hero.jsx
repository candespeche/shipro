import React from "react";
import style from "./hero.module.css";

function Hero() {
    return (
        <div className={style.heroContainer}>
            <div className={style.blueSection}>
                <h1>Tu logística<br />más simple,<br />eficiente<br />y con tarifas<br />preferenciales.</h1>
                <div className={style.buttonDemo}>¡Pedí tu demo!</div>
            </div>
            <div className={style.despachoImg}></div>
            <div className={style.orangeElement}></div>
        </div>
    )
}

export default Hero