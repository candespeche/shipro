import React from "react";
import style from "./modulos.module.css";

function Modulos(queEsDatos) {
    return (
        <div className={style.flexContainer}>
            {queEsDatos.queEsDatos.map((dato, index) => {
                return (
                    <div key={index} className={style.moduleContainer}>
                        {/* <div className={style.whiteCircle}> */}
                        <img className={style.moduleImage} src={dato.imagen} />
                        {/* </div> */}
                        <h3 className={style.title}>{dato.titulo}</h3>
                    </div>

                )
            })}
        </div>
    )
}

export default Modulos