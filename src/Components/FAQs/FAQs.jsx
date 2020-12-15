import React from "react";
import style from "./faqs.module.scss"
import Navbar from "../Common/Navbar/Navbar"
import Questions from "./Questions"
import Footer from "../Common/Footer/Footer";
import envioFoto from "../../assets/courier-delivering-parcel.jpg"

function FAQs() {
    let questions = [{
        title: "Logística",
        rows: [{
            title: "¿Qué pasa si quiero integrar a un nuevo operador?",
            content: "Si no está dentro de la red de Shipro, podemos integrarlo y activarlo en tu cuenta para que puedas utilizarlo sin que tengas que hacer ninguna integración extra. Si el operador que elegiste no tiene un desarrollo para integrarse, podemos ayudarlo para que lo haga."
        },
        {
            title: "¿Puedo hacer envíos al exterior?",
            content: "Si, dentro de la red de Shipro están los tres couriers internacionales más reconocidos: UPS, FedEx y DHL. Podrás enviar con ellos a cualquier parte del mundo a través del régimen de couriers."
        },
        {
            title: "¿Puedo elegir con qué correo operar?",
            content: "Si, podés seleccionar todos los correos que quieras y armar tu red para brindar el servicio que tus clientes esperan. Nosotros auditamos la performance de cada uno y te ofrecemos alternativas para que puedas evaluar y cambiar si lo crees necesario."
        },
        {
            title: "¿Cómo funciona la logística inversa?",
            content: "Cuando tengas que resolver ese conflicto, nosotros coordinaremos con el correo que realizó el envío para que haga el recupero de ese paquete y te lo entregue. Si tuvieras que realizar un cambio, también lo coordinaremos con el correo para que cuando entregue ese paquete te devuelva el otro."
        },
        {
            title: "¿Puedo entregar en sucursales?",
            content: "Si, podés utilizar todas las sucursales de todos los correos que actives. También podes utilizar solamente la red de sucursales de un correo puntual."
        },
        {
            title: "En las tarifas que nos ofrecen, ¿están incluidos sus honorarios?",
            content: "No, pero podemos incluirlas. Creemos que la transparencia en nuestra relación tiene que ser una base sólida y queremos que puedas evaluar las tarifas preferenciales que te conseguimos para que, sumado a nuestros honorarios, puedas ofrecer una tarifa razonable a tus clientes con un servicio personalizado"
        }]
    },
    {
        title: "Fullfillment",
        rows: [{
            title: "¿Qué es el fulfillment?",
            content: "Es el servicio completo de la venta de tu ecommerce. Recepcionamos tus productos (individualizados con SKUs) en nuestro warehouse, recibimos y procesamos la nueva venta, recolectamos cada producto, preparamos el envío embalándolos y lo despachamos hacia el domicilio de tu cliente. Es un servicio muy ágil para que puedas cumplir las expectativas de tus clientes."
        },
        {
            title: "¿Puedo controlar y administrar mi stock?",
            content: "Si, nosotros te vamos a dar toda la documentación de vinculación para que puedas integrarlas a tus sistemas. Si no tuvieras sistemas, te vamos a dar el acceso para que tengas toda la información disponible en tiempo real."
        },
        {
            title: "Si tengo distintos canales de ventas digitales, ¿puedo vincularlos con el stock que tengo depositado en el warehouse de Shipro?",
            content: "Si, los podés vincular a través de integraciones fáciles de realizar. Seguramente necesites ayuda de tus desarrolladores, pero contá con nuestra ayuda para realizarlo. Cada vez que realices una venta, sea por el canal que sea, nosotros vamos a preparar el pedido para entregárselo a tu cliente."
        }]
    },
    {
        title: "Ecommerce",
        rows: [{
            title: "¿Cómo integro mi ecommerce con Shipro?",
            content: "Tenemos dos métodos para ofrecerte: a través de integraciones con nuestras API Rest o mediante nuestros pluggings. Éstos últimos agilizan muchísimo la vinculación para que, en cuestión de días, estés operando automáticamente desde tu ecommerce."
        },
        {
            title: "¿Qué servicios puedo ofrecerles a mis clientes?",
            content: "Podés ofrecerles distintas tarifas y servicios en tiempo real. Podes elegir, dentro de esas cuál ofrecerle sin cargo. Envío a domicilio de forma “same day”, express o estándar. Envíos a sucursales. Consulta del estado del envío desde su cuenta de usuario dentro de tu ecommerce."
        },
        {
            title: "¿Puedo personalizar la herramienta y adaptarla a mis necesidades?",
            content: "Si, éste es el diferencial más importante de Shipro. Desarrollamos una herramienta super personalizable que se adapta a tus necesidades para que vos no tengas que adaptarte a las de otro. Con Shipro vas a elegir los operadores y, si no están, los integramos por vos. Podés elegir entre los distintos servicios de cada operador."
        },
        {
            title: "¿Puedo ofrecer distintas tarifas y servicios? ¿Cuántas opciones de envío puedo ofrecer?",
            content: "Si, podés ofrecer tantas como quieras. Todas las que necesites. Nosotros te aconsejaremos cuántas y de qué forma publicarlas."
        }]
    },
    {
        title: "Servicio de operadciones",
        rows: [{
            title: "¿Cuántos correos van a venir a retirar los envíos?",
            content: "¿Cuántos correos queres recibir en tu depósito? Podes elegirlo. Querés que un solo correo busque todo y redespache en el resto de tus operadores, dalo por hecho! Querés que pasen todos y cada uno de los ellos, también vas a poder. La elección es tuya. Nosotros vamos a aconsejarte todo el tiempo."
        },
        {
            title: "¿Ustedes se ocupan de hacer el seguimiento de cada envío?",
            content: "Vos podrías hacerlo, pero nosotros tenemos un área destinada a realizar ese servicio para todos nuestro clientes. Estamos auditando diariamente los estados de los envíos, nos comunicamos todo el tiempo con los correos realizando consultas que informamos proactivamente a tus clientes para que estén siempre informados y resolvemos las consultas anticipadas, referidas exclusivamente a los envíos, de tus clientes. También, todas las gestiones normales de cada operación, por ejemplo, las recoordinaciones entre el correo y tu cliente porque él no estaba disponible."
        },
        {
            title: "¿Con quién me voy a comunicar cuando tenga una consulta?",
            content: "Nosotros vamos a vincularte con un operador que va a ser tu partner en tu área de operaciones. Además, él va a escuchar tus necesidades para que te propongamos soluciones que las resuelvan. También vas a poder comunicarte con tu agente de cuentas para resolver cualquier otra inquietud. "
        }]
    },
    ]
    return (
        <div>
<Navbar home={false} />
            <div className={style.faqContainer}>
                {questions.map((eachQuestion) => {
                    return (
                        <div key={eachQuestion.question}>
                            <p className={style.titleEach}>{eachQuestion.title}</p>
                            {eachQuestion.rows.map((data, index) => {
                                return (
                                    <div key={index}>
                                        <Questions data={data} />
                                    </div>
                                )
                            }
                            )}
                        </div>
                    )
                })}
            </div>
            <Footer />
        </div>
    )
}
export default FAQs;
