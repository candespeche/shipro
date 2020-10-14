import React, { useEffect, useState } from "react";
import style from "./demo.module.scss";
import Demo from "./Demo"

function DemoContainer() {
    const [thanks, setThanks] = useState(false)
    const [submit, setSubmit] = useState(false)
    const [name, setName] = useState(false)
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
    useEffect(() => {
    }, [submit]);

    const handleInput = (e) => {
        setInfo({ ...info, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmit(true)
        setName(info.nombre_apellido)
        setThanks(true)
        fetch('https://www.shipro.pro/api/contacto', form)
            .then(res => res.json())
            .catch(err => console.log('Error, with message:', err.statusText));

    }
    return (
        <div className={style.DemoCont}>
            <Demo handleSubmit={handleSubmit} info={info} handleInput={handleInput} thanks={thanks} name={name} submit={submit} />
        </div>
    )
}

export default DemoContainer