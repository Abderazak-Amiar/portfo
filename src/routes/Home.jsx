import React, {useState} from "react"
import { useLocation } from "react-router-dom"
import About from "./About"
import Portfolio from "./Portfolio"
import Contact from "./Contact"
import Expertise from "./Expertise"
import Header from "../components/Header"
import Footer from "../components/Footer"
function Home() {
  
  return (
    <>
      <Header />
      <div className="container bg-light  mt-5 homepage px-5">
        <div className="row justify-content-between align-items-center mt-5">
          <div className="col-md-5 p-3">
            <h5>Hey, I am Abderazak</h5>
            <h1>
              I create <span className="webapp-span">web applications</span>
            </h1>
            <p>
              I am a software engineer, focused on the web development with all
              related JavaScript technologies. I love web design and I like to
              build prototypes that comply with the UX process and make them
              real with a piece of code.
            </p>
            {/* <button type="button" className="btn btn-primary"><a href="https://www.linkedin.com/in/zakamiar/" className="nav-link px-2">Get in touch</a></button> */}
          </div>
          <div className="col-md-5 bgimagehome rounded-circle m-3">
            <img className="w-75 h-auto" src="./images/desktop.png" alt="" />
          </div>
        </div>
      </div>

      <Expertise />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  )
}
export default Home
