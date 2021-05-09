import React, { useState } from "react";
import style from "./kit.module.scss"
import Title from "./Title";

function Questions() {
    const [click, setClick] = useState(10)

    return (
        <div className={style.questionWrap}>
            <Title setClick={setClick} id={1} click={click}>¡Bienvenido a Shipro!</Title>
            <div className={click == 1 ? style.answerWrap : style.answerWrapClick}>
                <p>Estamos muy agradecidos que nos des la posibilidad de trabajar juntos. Encontrarás en nosotros personas comprometidas en ayudarte a que tu pedido se entregue correctamente y puedas hacer crecer tu negocio. Trabajaremos juntos para mejorar día a día.<br/>
                Necesitamos que nos mandes firmado el contrato de adhesión a nuestro servicio. Por favor leelo atentamente antes.<br/>
                También, que nos adjuntes todos los comprobantes fiscales, ya seas una persona física o jurídica, para que podamos activar tu cuenta.<br/>
                Y no te olvides decirnos dónde podemos retirar tus productos, tus preferencias horarias y con quién debemos trabajar para que podamos hacerlo bien.</p>
            </div>

            <Title setClick={setClick} id={2} click={click}>Integración y documentación para la misma</Title>
            <div className={click == 2 ? style.answerWrap : style.answerWrapClick}>
                <p>Podemos empezar compartiendo la documentación de nuestras APIs para que puedas integrarnos a tu ecommerce. Para eso, podes visitar <a href="http://shipro.pro/docs/">http://shipro.pro/docs/</a> para encontrar la última versión o podés pedirnos el plug-in para hacerlo más rápido este proceso.<br/>
                Ponemos a tu disposición, y a la de tus desarrolladores, a nuestro equipo técnico para que puedan ayudarlos a hacerlo más rápido. Podés escribirnos a <a href="mailto:soporte@shipro.pro">soporte@shipro.pro</a> cuando lo necesites. Recordá que siempre vamos a estar disponibles para ayudarte.</p>
            </div>

            <Title setClick={setClick} id={3} click={click}>Armado e impresión de etiquetas</Title>
            <div className={click == 3 ? style.answerWrap : style.answerWrapClick}>
                <p>Cuando tu cuenta esté dada de alta, vas a poder operar desde la integración a tu ecommerce y/o desde el acceso a nuestra plataforma.<br/>
                Desde acá, vas a poder generar etiquetas manualmente. Por ejemplo, para tus envíos mayoristas o ventas por redes sociales. También, vas a poder ver todas las etiquetas que generaste automáticamente desde la integración de tu ecommerce.<br/>
                Si no te parece intuitiva nuestra plataforma, podemos guiarte fácilmente. Solo tenes que pedirnos ayuda las primeras veces hasta que tengas aceitada la práctica. Mandanos un mail a <a href="mailto:operaciones@shipro.pro">operaciones@shipro.pro</a> y estaremos a tu disposición.</p>
            </div>

            <Title setClick={setClick} id={4} click={click}>Armado de paquetes para garantizar el buen transporte</Title>
            <div className={click == 4 ? style.answerWrap : style.answerWrapClick}>
                <p>Necesitamos que tu paquete llegue bien y es importantísimo que todos tus productos estén correctamente embalados.<br/>
                Si utilizas bolsas, que sean de polietileno extra grueso con adhesivo inviolable por favor. No te olvides de ponerle dentro la bolsa de tu tienda para que puedan llevar tu producto.<br/>
                Si vas a utilizar cajas o un packaging personalizado, recordá encintar todas sus uniones y colocarle dentro todos los accesorios de seguridad para que tu producto viaje inmovilizado y seguro para que tu cliente lo reciba en perfecto estado tal cual lo guardaste.<br/>
                De esta manera vamos a prever siniestros que pudieran suceder.<br/>
                No te olvides de imprimir la etiqueta y pegarla en la cara plana más amplia que tenga tu paquete para que pueda ser leída fácilmente.<br/>
                Si necesitas ayuda, nosotros podemos ayudarte y solo nos lo tenés que pedir.</p>
            </div>

            <Title setClick={setClick} id={5} click={click}>Instructivo de tipos de Estado para que el cliente pueda leer en la web</Title>
            <div className={click == 5 ? style.answerWrap : style.answerWrapClick}>
                <p>Hoy tenemos 11 estados para ofrecerte y queremos explicarlos para que sepas que pasa en cada uno de ellos.<br/>
                - Tu envío está listo para ser recolectado: publicamos este estado cuando se generó la etiqueta que va a ser pegada en el paquete.<br/>
                - Tu envío está viajando al correo responsable de la entrega: esto es cuando el correo recolectó todos tus paquetes y los va a distribuir entre los correos que haran la entrega de cada envío.<br/>
                - El correo recibió tu envío. Ahora comienza el circuito de distribución: ahora si lo tiene el correo que va a hacer la entrega de tu producto y empieza el proceso de entrega.<br/>
                - El correo está procesando tu envío, te visitará en los próximos días: estos son todos los estados intermedios que tu paquete tiene antes de salir a distribución. Si tiene que viajar a otra provincia, por ejemplo.<br/>
                - Tu envío llegó a la sucursal responsable de la entrega: esto significa que tu paquete está próximo a salir a distribución para entregarlo.<br/>
                - El correo te visitará hoy para entregarte tu envío: el correo nos informa que tu paquete se incluyó entre los que se estarán distribuyendo el día de hoy.<br/>
                - El correo entregó correctamente tu envío: finalmente, y después de varios estados,  tu paquete se entregó correctamente.<br/>
                - El correo reprogramó tu envío. Si tenés dudas, contactanos por mail a <a href="mailto:operaciones@shipro.pro">operaciones@shipro.pro</a> por favor: el correo tuvo algún problema para entregar tu producto y nosotros vamos a averiguarlo. Suele suceder que no encontraron al destinatario, por ejemplo.<br/>
                - Tu envío fue anulado. Si tenés dudas, contactanos por mail a <a href="mailto:operaciones@shipro.pro">operaciones@shipro.pro</a> por favor.: nos pediste que no entreguemos el paquete y se lo comunicamos al correo para que actualice el estado y te devuelva el paquete.<br/>
                - El correo tuvo un problema con tu envío. Si tenés dudas, contactanos por mail a <a href="mailto:operaciones@shipro.pro">operaciones@shipro.pro</a> por favor.: sucede cuando el paquete sufió un siniestro o hay un problema con los datos, generalmente, y nosotros averiguaremos por que para comunicartelo.<br/>
                - Error de conexión. Si tenés dudas, contactanos por mail a <a href="mailto:operaciones@shipro.pro">operaciones@shipro.pro</a> por favor.: es un error de conexión entre el sistema del correo y el nuestro, pero lo solucionaremos.<br/>
                - Siempre vamos a intentar estar en contacto con tus clientes y que tus clientes estén en contacto con nosotros.<br/>
                Esperamos que sean de tu agrado y que sean bien claros.</p>
            </div>

            <Title setClick={setClick} id={6} click={click}>Plazos de entrega alineados a la situación particular de pandemia y a las diferentes rutas.</Title>
            <div className={click == 6 ? style.answerWrap : style.answerWrapClick}>
                <p>Aunque tenemos la sensación que la pandemia ya no es un limitante en nuestro día, tenemos que tener en claro que existen protocolos que limitan la actividad de los correos: 3 rondas diarias para tomar la temperatura, burbujas que se ven afectadas frente a una sospecha o confirmación de COVID positivo o ciudades o provincias con acceso restringido hacen que las demoras sucedan a diario.<br/>
                Te recomendamos, siempre, ser paciente y que transmitas la mejor calidad de información para que tu cliente esté conforme.<br/>
                Nosotros trabajamos para que los plazos se ajusten automáticamente de acuerdo a la performance de cada correo, poder publicar la información actual para que tu cliente tenga expectativas que se cumplan y mejorar su experiencia.</p>
            </div>

            <Title setClick={setClick} id={7} click={click}>Descripción de tipo de liquidación, facturación y tiempos deseables</Title>
            <div className={click == 7 ? style.answerWrap : style.answerWrapClick}>
                <p>Vas a recibir los primeros días de cada mes una liquidación de todos los envíos que recibiste con la información correspondiente junto con la factura con todos los detalles de los servicios que consumiste de cada correo y con nosotros.<br/>
                Vamos a intentar siempre que puedas tener la información lo más simple, clara, detallada y auditada posible para que no tengas dudas.<br/>
                Te pedimos que al vencimiento de cada factura realices la transferencia y nos envíes el comprobante a <a href="mailto:administracion@shipro.pro">administracion@shipro.pro</a> para que podamos contabilizarlo correctamente.<br/>
                Preferimos que nos envíes el dinero a nuestra cuenta de MercadoPago. Nuestro VCU es <b>0000003100054883591214</b> y nuestro alias es <b>argenshiprosas.mp.</b><br/>
                También, tenemos una cuenta corriente en el Banco Itau. Nuestro CBU es 2590064610347796510098 y nuestro alias es ARGENSHIPRO.SAS.</p>
            </div>

            <Title setClick={setClick} id={8} click={click}>Seguro (condiciones y costo)</Title>
            <div className={click == 8 ? style.answerWrap : style.answerWrapClick}>
                <p>Todos los envíos de paquetería se encuentran asegurados con una póliza de Shipro en SURA para que siempre estés resguardado mínimamente. Si sucede algún siniestro con tu paquete, nosotros gestionaremos todo el proceso con el seguro y te lo acreditaremos en tu próxima factura.<br/>
                Cada envío lo aseguras por $16,00 + IVA al día de hoy por una suma asegurada de hasta $3.000,00.<br/>
                Necesitás saber que la póliza cubre el robo y daños de tu paquete, pero se excluye el hurto. También, la cobertura del robo tiene una franquicia del 5%. O sea, te van a descontar el 5% del total del valor del producto hasta $3.000,00. Por ejemplo, si tu producto vale $2.000,00 y robaron la camioneta donde iba, el seguro te va a devolver $1.900,00. Si tu producto vale $4.000,00 y sufrió el mismo robo, el seguro te va a devolver $2.850,00.<br/>
                Existen artículos que no vas a poder asegurar con esta póliza. Por ejemplo, los perfumes, las joyas o los teléfonos celulares.<br/>
                Si quisieras contar con un seguro acorde a otro valor asegurado, por favor avisanos así podemos gestionarlo.</p>
            </div>

            <Title setClick={setClick} id={9} click={click}>Sistema de devoluciones</Title>
            <div className={click == 9 ? style.answerWrap : style.answerWrapClick}>
                <p>Si tuvieras devoluciones o cambios, te recomendamos que te comuniques con nosotros para que podamos ayudarte para tomar la mejor decisión para hacer la logística inversa.<br/>
                Los correos, en estos tiempos, funcionan de distinta manera con respecto a un envío común y pueden no prestar el servicio. También, puede suceder que podamos resolverlo de una manera más eficiente de acuerdo a dónde se encuentre el paquete.<br/>
                Siempre te recomendamos que lo hagamos juntos y nos lo pidas a <a href="mailto:operaciones@shipro.pro">operaciones@shipro.pro</a> Tené en cuenta que suelen haber diferencias entre las tarifas. Por ejemplo, si se dieran las condiciones, un correo cobra el 150% de la tarifa de envío por hacer nuevamente el envío y traerte tu paquete que no aceptó tu cliente.<br/>
                Para terminar, no queremos dejar de contarte que tenemos un Servicio Premium que suma todos nuestros Servicios Full, pero le agregamos servicios complementarios para ayudarte a mejorar la experiencia de tu cliente y que tu paquete sea la mejor versión de tu marca. ¿Te interesa conocer más sobre este servicio? Por favor contactanos porque nos gustaría presentártelo.</p>
            </div>
        </div>
    )
}

export default Questions;