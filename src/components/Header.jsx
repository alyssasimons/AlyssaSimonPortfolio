import React from "react"
import logo from "/assets/aslogo.png"

export default function Header() {
    return (
        <header className="header">
            <div className="logo">
                <img src={logo} className="logoImg" alt="Portfolio logo containing the letters A and S beside each other"/>
            </div>
            <nav className="navlinks">
                <a href="#main">Home</a>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    )
}