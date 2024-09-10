import React from "react"

export default function MainContent() {
    return (
        <section className="main-body" id="main">
            <div className="main-text">
                <h1> Alyssa Simon </h1>
                <h3> Full-Stack Web Developer 💻</h3>
                <div className="links"> 
                    <a className="linkedin" href="https://www.linkedin.com/in/alyssasimon" target="_blank"><i class="fa-brands fa-linkedin"></i> LinkedIn</a>
                    <a className="email" href="mailto:alyssasimon519@gmail.com"><i class="fa-solid fa-envelope"></i> Email</a>
                </div>
                <a href="#about"><i class="fa-solid fa-angles-down arrow"></i></a> 
            </div>
        </section>
    )
}