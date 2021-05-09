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
                <Questions />
            </div>
            <Footer />
        </div>
    )
}
export default Kit;
