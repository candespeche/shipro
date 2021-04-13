import React from "react";
import style from "./demo.module.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/shipro-logo.svg"
import whatsapp from "../../assets/whatsapp.svg"

function Thanks(props) {
    return (
        <div className={style.DemoCont}>
            <div className={style.demoNav}>
                <Link to={"/"}>
                    <img className={style.logoH} href="/" src={logo} alt="Shipro" />
                </Link>
                <Link to={"/"} className={style.navLink}>
                    CONOCENOS
                </Link>
            </div>

            <div className={style.mainCont}>
                <div className={style.imgDemoOrange}>
                    <div className={style.imgDemo}>
                        <h1>Logística de envíos</h1>
                        <h3>para tu ecommerce</h3>
                    </div>
                    <div className={style.orangeDecor}></div>
                </div>
                <div className={style.formContainerTks}>
                    <h2>¡Gracias{props.location.state ? ` ${props.location.state}` : " "}<br />por dejarnos tus datos!</h2>
                    <div className={style.orangeDivisor}></div>
                    <h3>En las próximas 24hs hábiles<br />nos comuncaremos con vos.</h3>
                    <h4>Si tenés alguna duda, <a target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=+12109421987">escribinos.</a></h4>
                </div>
            </div>
            <a target="_blank" rel="noopener noreferrer" href={"https://api.whatsapp.com/send?phone=+12109421987"}>
                <div className={style.whatsappCont}>
                    <img src={whatsapp} alt="whatsapp" />
                </div>
            </a>
        </div>
    )
}

export default Thanks
