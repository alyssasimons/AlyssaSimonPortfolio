import React from "react"

export default function Projects(props) {
    return (
        <div className="project-card">
            <img className="projectimg" src={props.img} alt="Detect AI Project"/>
            <p className="projecttitle">{props.title}</p>
            <p>{props.description}</p>
            <p>{props.languages}</p>
            <div className="projectlinks">
                <a href={props.github} target="_blank"><i className="fa-brands fa-github"></i></a>
                {/*<a href="https://colab.research.google.com/drive/1j0w3Quqtt462WUjA42wt26E8YWwg3pAU" target="_blank"><i className="fa-solid fa-rocket"></i></a>*/}
            </div>
        </div>
    )
}