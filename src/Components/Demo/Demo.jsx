import React from "react";
import style from "./demo.module.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/shipro-logo.svg"
import whatsapp from "../../assets/whatsapp.svg"

function Demo({ handleSubmit, handleInput }) {

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
                <div className={style.formContainer}>
                    <h2>¡Dejanos tus datos<br />y nos contactamos!</h2>
                    <div className={style.orangeDivisor}></div>
                    <form onSubmit={(e) => { handleSubmit(e) }} className={style.formFocus}>
                        <div className={style.firstInputCont}>Nombre y apellido*
                            <div className={style.formInput}>
                                <input type="text" onChange={(e) => { handleInput(e) }} name="nombre_apellido" required />
                            </div>
                        </div>
                        <div className={style.miniInputCont}>
                            <div className={style.firstInputCont}>Empresa y cargo
                            <div className={style.formInput}>
                                    <input type="text" onChange={(e) => { handleInput(e) }} name="cargo" />
                                </div>
                            </div>
                            <div className={style.secondInputCont}>País*
                        <div className={style.formInput}>
                                    <input type="text" onChange={(e) => { handleInput(e) }} name="pais" required />
                                </div>
                            </div>
                        </div>
                        <div className={style.miniInputCont}>
                            <div className={style.firstInputCont}>Email*
                            <div className={style.formInput}>
                                    <input onChange={(e) => { handleInput(e) }} type="email" name="email" required />
                                </div>
                            </div>
                            <div className={style.secondInputCont}>Teléfono
                        <div className={style.formInput}>
                                    <input onChange={(e) => { handleInput(e) }} type="number" name="telefono" />
                                </div>
                            </div>
                        </div>
                        <div className={style.sumbitButtonCont}>
                            <button type="submit" className={style.sumbitButton}>Enviar</button>
                        </div>
                    </form>
<a target="_blank" rel="noopener noreferrer" href={"https://api.whatsapp.com/send?phone=+12109421987"}>
              <div className={style.whatsappCont}>
                  <div className={style.wpBubble}>
                   </div>
                  <img src={whatsapp} alt="whatsapp" />
              </div>
          </a>
		  
                </div>
            </div>   
	  </div>
    )
}

export default Demo
