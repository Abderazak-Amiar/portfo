import ExpertiseCard from "../components/ExpertiseCard"
import { useLocation } from "react-router-dom"
import React, { useEffect, useState } from "react"
import axios from "axios"
import Header from "../components/Header"
import Footer from "../components/Footer"

function Expertise() {
  const axiosInstance = axios.create({baseURL : process.env.REACT_APP_API_URL })
  const location = useLocation()
  const route = location.pathname
  const style = route === "/expertise" ? "h-100" : ""
  //===============================================================
  const [skills, setSkills] = useState([])

  useEffect(() => {
    axiosInstance
      .get("skill")
      .then((res) => {
        setSkills(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <>
          {(route === "/expertise") && <Header />}
      <div
        className={`container d-flex align-items-center ${style} pt-5  px-5`}
      >
        <div className={`row my-5 justify-content-between`}>
          <h3 className="textSubHeader">Skills</h3>
          <h1 className="mb-5">My Expertise</h1>
          {skills.map((item, index) => (
            <ExpertiseCard key={index} id={index} data={item} />
          ))}
        </div>
      </div>
      {(route === "/expertise") && <Footer />}
    </>
  )
}
export default Expertise
