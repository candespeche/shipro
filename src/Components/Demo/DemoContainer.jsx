import React, { useState } from "react";
import style from "./demo.module.scss";
import Demo from "./Demo"

function DemoContainer({ history }) {
    const [info, setInfo] = useState({
        nombre_apellido: "",
        cargo: "",
        email: "",
        telefono: "",
        pais: ""
    })

    const form = {
        method: 'POST',
        body: JSON.stringify(info),
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const handleInput = (e) => {
        setInfo({ ...info, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        history.push({
            pathname: "/thankyou",
            state: info.nombre_apellido
        });
        fetch('https://www.shipro.pro/api/contacto', form)
            .then(res => res.json())
            .catch(err => console.log('Error, with message:', err.statusText));
    }
    return (
        <div className={style.DemoCont}>
            <Demo handleSubmit={handleSubmit} info={info} handleInput={handleInput} />
        </div>
    )
}

export default DemoContainer