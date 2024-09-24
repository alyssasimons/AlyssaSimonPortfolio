import React from "react"

export default function Projects(props) {
    return (
        <div className="project-card">
            <img className="projectimg" src={props.item.img} alt="Detect AI Project"/>
            <p className="projecttitle">{props.title}</p>
            <p>{props.item.description}</p>
            <p>{props.item.languages}</p>
            <div className="projectlinks">
                <a href={props.item.github} target="_blank"><i className="fa-brands fa-github"></i></a>
                {props.item.demo === true && <a href={props.item.link} target="_blank"><i className="fa-solid fa-rocket"></i></a>}
            </div>
        </div>
    )
}