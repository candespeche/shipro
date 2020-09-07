import React from "react";
import Navbar from "../Common/Navbar/Navbar"
import Hero from "./Hero/Hero"
import QueEs from "./QueEs/QueEs"
import Clientes from "./Clientes/Clientes"
import Footer from "../Common/Footer/Footer"

function Landing() {
    return (
        <div>
            <Navbar home={true} />
            <Hero />
            <QueEs />
            <Clientes />
            <Footer />
        </div>
    )
}

export default Landing