import React from "react";
import style from "./kit.module.scss"
import Navbar from "../Common/Navbar/Navbar"
import Questions from "./Questions"
import Footer from "../Common/Footer/Footer";
import { kitTitles } from "./kit.js"

function Kit() {
    return (
        <div>
            <Navbar home={false} />
            <div className={style.faqContainer}>
                <h1 className={style.title}>¡Bienvenido a Shipro!</h1>
                <p className={style.subtitle}>Estamos muy agradecidos que nos des la posibilidad de trabajar juntos. Encontrarás en nosotros personas comprometidas en ayudarte a que tu pedido se entregue correctamente y puedas hacer crecer tu negocio. Trabajaremos juntos para mejorar día a día.<br />
                    Necesitamos que nos mandes firmado el contrato de adhesión a nuestro servicio. Por favor leelo atentamente antes.<br />
                    También, que nos adjuntes todos los comprobantes fiscales, ya seas una persona física o jurídica, para que podamos activar tu cuenta.<br />
                    Y no te olvides decirnos dónde podemos retirar tus productos, tus preferencias horarias y con quién debemos trabajar para que podamos hacerlo bien.</p>
                <Questions />
                <p className={style.subtitle}>Para terminar, no queremos dejar de contarte que tenemos un Servicio Premium que suma todos nuestros Servicios Full, pero le agregamos servicios complementarios para ayudarte a mejorar la experiencia de tu cliente y que tu paquete sea la mejor versión de tu marca. ¿Te interesa conocer más sobre este servicio? Por favor contactanos porque nos gustaría presentártelo.</p>
            </div>
            <Footer />
        </div>
    )
}
export default Kit;
