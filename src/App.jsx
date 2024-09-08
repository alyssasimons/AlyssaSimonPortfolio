import { useState } from 'react'
import Header from "./components/Header"
import MainContent from "./components/MainContent"
import About from "./components/About"
import Projects from "./components/Projects"
import Footer from  "./components/Footer"
import './App.css'

export default function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <About />
      <Projects />
      <Footer />
    </div>
  )
}