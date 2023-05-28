import React from "react"
import ContactForm from "../components/ContactForm"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { useLocation } from "react-router-dom"
function Contact() {
    const location = useLocation()
    const route = location.pathname
  return (
    <>
          {(route === "/contact") && <Header />}
      <div className="container pt-5 px-5 pb-5 mt-5">
        <ContactForm />
      </div>
      {(route === "/contact") && <Footer />}
    </>
  )
}
export default Contact
