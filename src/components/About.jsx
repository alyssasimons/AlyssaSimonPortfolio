import React from "react"
import me from "../assets/me.png"
import resume from "../assets/AlyssaSimonResume.pdf"

export default function About() {
    return (
        <section className="about" id="about">
            <h1>About Me</h1>
            <div className="about-main">
                <div className="about-p">
                    <p>Hello! 👋🏻</p>
                    <p>
                    I'm a recent Computer Science and Information Systems graduate from New Jersey City University.
                    Based in the NYC Metropolitan area, I'm seeking opportunities to learn, enhance, and develop new skills, specifically in web development.
                    With my current skills, I intend to contribute efficiency, versatility, and new creative ideas to help build intuitive and functional websites.
                    </p>
                    <p> I'm passionate about technology and creating art, therefore web development has become an outlet for me to merge these two interests!
                        I love to visually see my creations come to life✨</p>
                    <br/>
                    <p><a href={resume} target="_blank">View my resume</a></p>
                </div>
                <div className="me-top">
                    <img src={me} alt="Image of me"/>
                </div> 
            </div>
            <span className="skills"> Technical Skills </span>
                <ul className="about-ul">
                    <li> <img className="skillimg" src="assets/html.png"/> </li>
                    <li> <img className="skillimg" src="assets/css.png"/> </li>
                    <li> <img className="skillimg" src="assets/js.png"/> </li>
                    <li> <img className="skillimg" src="assets/java.png"/> </li>
                    <li> <img className="skillimg" src="assets/python.png"/> </li>
                </ul>
                <ul className="about-ul">
                    <li> <img className="skillimg" src="assets/vscode.png"/> </li>
                    <li> <img className="skillimg" src="assets/github.png"/> </li>
                    <li> <img className="skillimg" src="assets/git.png"/> </li>
                    <li> <img className="skillimg" src="assets/bootstrap.png"/> </li>
                    <li> <img className="skillimg" src="assets/react.png"/> </li>
                    <li> <img className="skillimg" src="assets/jquery.png"/> </li>
                    <li> <img className="skillimg" src="assets/node.png"/> </li>
                </ul>
        </section>
    )
}