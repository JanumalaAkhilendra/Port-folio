import { useState } from 'react'
import './App.css'
import Project from './components/Projects/Project'
import Skills from './components/Skills/Skills'
import Education from './components/Education/Education'
import Facts from './components/Facts/Facts'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Experience from './components/Experience/Experience'
import Home from './components/Home/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home />
    <Navbar />
    <Education />
    <Experience />
    <Skills />
    <Project />
    <Facts />
    <Footer/>
    </>
  )
}

export default App
