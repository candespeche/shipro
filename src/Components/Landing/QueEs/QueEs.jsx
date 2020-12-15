import React from "react";
import style from "./quees.module.scss";
import Modulos from "./Modulos"
import primeroSvg from "../../../assets/01.svg"
import segundoSvg from "../../../assets/02.svg"
import terceroSvg from "../../../assets/03.svg"
import cuartoSvg from "../../../assets/04.svg"
import quintoSvg from "../../../assets/05.svg"
import queEsImagen from "../../../assets/a-smiling-person-wearing-an-orange-t-shirt-and-a-n-9M5R2VS.jpg"
var Scroll = require('react-scroll');
var Element = Scroll.Element;

function QueEs() {
    let queEsDatos = [
        {
            titulo: "Una integración, toda la red",
            texto: "Nuestra red de Correos, flotas de fletes, couriers internacionales y servicios de paquetería urbana está en constante crecimiento.",
            imagen: primeroSvg
        },
        {
            titulo: "Eficiencia a tu medida",
            texto: "Al no tener exclusividad con ningún partner, no estás atado ni a sus tiempos ni a sus tarifas y podés elegir las que más se ajusten a tus necesidades.",
            imagen: segundoSvg
        },
        {
            titulo: "Llegá a donde querés",
            texto: "Te ofrecemos los servicios para que tu negocio crezca. Envíos, Warehouse, Fulfillment y ventas en Marketplaces y en E-commerce en el exterior (USA y Europa).",
            imagen: terceroSvg
        },
        {
            titulo: "Una API de gran escala",
            texto: "Gestioná los envíos al consumidor final y la logística entre sucursales, ¡todo en un mismo lugar! Tenemos prestadores para Alimentos y para Mercadería General.",
            imagen: cuartoSvg
        },
        {
            titulo: "La información como pilar",
            texto: "Tenemos un sistema de seguimiento para que tu cliente siempre esté informado y nos comunicamos con él en caso de que haya que volver a coordinar la entrega.",
            imagen: quintoSvg
        },

    ]
    return (
        <Element id='quees' name="quees">
            <div className={style.queEsContainer}>
                <h2>¿Qué es Shipro?</h2>
                <div className={style.greyBkg}>
                    <div className={style.textContainer}>
                        <div className={style.orangeDivisor}></div>
                        <div className={style.queEsImg}></div>
                        <p className={style.textQuees}>Es un servicio de logística que usa la tecnología para garantizar la eficiencia de cada envío. Nuestro sistema se integra rápidamente a tu e-commerce, o plataforma de ventas para que puedas elegir las mejores opciones de tiempos y tarifas para enviar tus productos a donde querés.
                        </p>
                        <a className={style.acontainer} Link to="/solicitar-demo" >
                            <div className={style.demoContainer}>
                                <p>¡Pedí tu demo!</p>
                            </div>
                        </a>
                    </div>
                    <div className={style.queEsImagen}>
                        <img src={queEsImagen} alt="Sobre Shipro" />
                    </div>
                    <Modulos queEsDatos={queEsDatos} />
                </div>
            </div>
            <div className={style.orangeContainer}>
                <p>La logística que necesitás para el negocio que querés ser.</p>
            </div>
        </Element >
    )
}

export default QueEs
