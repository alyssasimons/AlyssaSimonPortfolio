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
                {props.demo.deployed === true && <a href={props.demo.link} target="_blank"><i className="fa-solid fa-rocket"></i></a>}
            </div>
        </div>
    )
}