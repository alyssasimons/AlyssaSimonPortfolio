import React from "react"

export default function Projects() {
    return (
        <section className="projects" id="projects">
            <h1>Projects</h1>
            <div className="projectcards">
                <div className="project-card">
                    <img className="projectimg" src="assets/detectai.png" alt="Detect AI Project"/>
                    <p class="projecttitle">AI vs Student Essays</p>
                    <p>ML model that determines whether an essay is AI or student generated.</p>
                    <p>Python</p>
                    <div className="projectlinks">
                        <a href="https://github.com/alyssasimons/detect-ai" target="_blank"><i class="fa-brands fa-github"></i></a>
                        <a href="https://colab.research.google.com/drive/1j0w3Quqtt462WUjA42wt26E8YWwg3pAU" target="_blank"><i class="fa-solid fa-rocket"></i></a>
                    </div>
                </div>
                <div className="project-card">
                    <img className="projectimg" src="assets/gamepicker.png" alt="Game picker project image"/>
                    <p class="projecttitle">Game Picker</p>
                    <p>Web application that picks a random game for you.</p>
                    <p>Node/Express, EJS, JavaScript, & CSS</p>
                    <div className="projectlinks">
                        <a href="https://github.com/alyssasimons/game-picker" target="_blank"><i class="fa-brands fa-github"></i></a>
                    </div>
                </div>
                <div className="project-card">
                    <img className="projectimg" src="assets/slms.png" alt="Student library management system project image"/>
                    <p class="projecttitle">Student Library Management System</p>
                    <p>Provisional GUI system built based on collaborative ideations.</p>
                    <p>Java (Java Swing)</p>
                    <div className="projectlinks">
                        <a href="https://github.com/alyssasimons/student-library-management-system" target="_blank"><i class="fa-brands fa-github"></i></a>
                    </div>
                </div>
                <div className="project-card">
                    <img className="projectimg" src="assets/lasa.png" alt="Lasa website project image"/>
                    <p class="projecttitle">Lasa Website</p>
                    <p>Provisional Filipino recipe website showcasing a few of my mom's recipes!</p>
                    <p>HTML, CSS, JavaScript, Bootstrap</p>
                    <div className="projectlinks">
                        <a href="https://github.com/alyssasimons/Lasa-Website" target="_blank"><i class="fa-brands fa-github"></i></a>
                        <a href="https://alyssasimons.github.io/Lasa-Website/" target="_blank"><i class="fa-solid fa-rocket"></i></a>
                    </div>
                </div>
            </div>
        </section>
    )
}