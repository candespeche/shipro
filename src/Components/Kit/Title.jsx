import React, { useState } from "react";
import style from "./kit.module.scss"

function Title({ children, click, setClick, id }) {
    const handleClick = () => {
        if(click == 0){
            setClick(id)
        } else {
            setClick(0)
        }
    }
    return (
        <div onClick={handleClick} className={style.questionContainer}>
            <h3 style={{ color: click == id ? "#E5590A" : "#2E5F98" }}>{children}</h3>
            <div style={{ backgroundColor: click == id ? "#E5590A" : "#2E5F98" }} className={style.circle}>{click == id ? "-" : "+"}</div>
        </div>
    )
}

export default Title;