import React from "react";
import style from "./modulos.module.scss";
var Scroll = require('react-scroll');
var Element = Scroll.Element;

function Modulos(queEsDatos) {
    return (
        <Element id='comoes' name="comoes">
            <div className={style.flexContainer}>
                {queEsDatos.queEsDatos.map((dato, index) => {
                    return (
                        <div key={index} className={style.moduleContainer}>
                            <img alt={dato.title} className={style.moduleImage} src={dato.imagen} />
                            <div>
                                <h3 className={style.title}>{dato.titulo}</h3>
                                <p className={style.textInfo}>{dato.texto}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </Element >
    )
}

export default Modulos