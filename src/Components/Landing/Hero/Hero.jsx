import React from "react";
import style from "./hero.module.scss";
import { Link } from "react-router-dom";

function Hero() {
    return (
        <div className={style.heroContainer}>
            <div className={style.blueSection}>
                <h1>Tu logística<br />más simple,<br />eficiente<br />y con tarifas<br />preferenciales.</h1>
                <Link to="/solicitar-demo"><div className={style.buttonDemo}>¡Pedí tu demo!</div></Link>
            </div>
            <div className={style.despachoImg}></div>
            <div className={style.orangeElement}></div>
        </div>
    )
}

export default Hero
