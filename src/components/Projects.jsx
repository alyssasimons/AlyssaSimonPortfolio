import React from "react"

export default function Projects() {
    return (
        <section className="projects" id="projects">
            <h1>Projects</h1>
            <div className="projectcards">
                <div className="project-card">
                    <img className="projectimg" src="assets/detectai.png" alt="Detect AI Project"/>
                    <p>AI vs Student Essays</p>
                    <p>A machine learning model that determines whether an essay is AI or student generated.</p>
                    <p>Python</p>
                    <div className="projectlinks">
                        <a href="https://github.com/alyssasimons/detect-ai" target="_blank"><i class="fa-brands fa-github"></i></a>
                        <a href="https://colab.research.google.com/drive/1j0w3Quqtt462WUjA42wt26E8YWwg3pAU" target="_blank"><i class="fa-solid fa-rocket"></i></a>
                    </div>
                </div>
                <div className="project-card">
                    <img className="projectimg" src="assets/gamepicker.png" alt="Game picker project image"/>
                    <p>Game Picker</p>
                    <p>A website application that picks a random game for you when you're indecisive.</p>
                    <p>Node.js, Express.js, EJS, JavaScript, & CSS</p>
                    <div className="projectlinks">
                        <a href="https://github.com/alyssasimons/game-picker" target="_blank"><i class="fa-brands fa-github"></i></a>
                    </div>
                </div>
                <div className="project-card">
                    <img className="projectimg" src="assets/slms.png" alt="Student library management system project image"/>
                    <p>Student Library Management System</p>
                    <p>Collaboratively built a provisional GUI management system.</p>
                    <p>Java (Java Swing)</p>
                    <div className="projectlinks">
                        <a href="https://github.com/alyssasimons/student-library-management-system" target="_blank"><i class="fa-brands fa-github"></i></a>
                    </div>
                </div>
                <div className="project-card">
                    <img className="projectimg" src="assets/lasa.png" alt="Lasa website project image"/>
                    <p>Lasa Website</p>
                    <p>A Filipino recipe website showcasing a few of my mom's recipes!</p>
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