import React, { useState } from "react";
import style from "./faqs.module.scss"

function Questions({ data }) {
    const [click, setClick] = useState(false)
    return (
        <div onClick={() => setClick(!click)} className={style.questionWrap}>
            <div className={style.questionContainer}>
                <h3 style={{ color: click ? "#E5590A" : "#2E5F98" }}>{data.title}</h3>
                <div style={{ backgroundColor: click ? "#E5590A" : "#2E5F98" }} className={style.circle}>{click ? "-" : "+"}</div>
            </div>
            <div className={click ? style.answerWrap : style.answerWrapClick}>
                <p>{data.content}</p>
            </div>
        </div>
    )
}

export default Questions;