import { useState } from 'react'
import Header from "./components/Header"
import MainContent from "./components/MainContent"
import About from "./components/About"
import Projects from "./components/Projects"
import Footer from  "./components/Footer"
import projectData from "./ProjectData"
import './App.css'

export default function App() {

  const project = projectData.map((i) =>
    <Projects 
        img={i.img}
        title={i.title}
        description={i.description}
        languages={i.languages}
        github={i.github}
    />
)

  return (
    <div>
      <Header />
      <MainContent />
      <About />
      <section className="projects" id="projects">
        <h1>Projects</h1>
        <div className="projectcards">
          {project}
        </div>
      </section>
      <Footer />
    </div>
  )
}

/* TODO:
- change logo(?)
- make about me more interactice (hover over picture)
- modify tech skills section(?)
- change cards in projects
*/