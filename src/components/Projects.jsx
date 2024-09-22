import React from "react"

export default function Projects(props) {
    return (
        <div className="project-card">
            <img className="projectimg" src={props.img} alt="Detect AI Project"/>
            <p class="projecttitle">{props.title}</p>
            <p>{props.description}</p>
            <p>{props.languages}</p>
            <div className="projectlinks">
                <a href="https://github.com/alyssasimons/detect-ai" target="_blank"><i class="fa-brands fa-github"></i></a>
                <a href="https://colab.research.google.com/drive/1j0w3Quqtt462WUjA42wt26E8YWwg3pAU" target="_blank"><i class="fa-solid fa-rocket"></i></a>
            </div>
        </div>
    )
}