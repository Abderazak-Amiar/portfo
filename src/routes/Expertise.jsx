import React from "react"
import ExpertiseCard from "../components/ExpertiseCard"
import expertiseData from "../api/expertiseData"
import { useLocation } from "react-router-dom"

function Expertise() {
    const location = useLocation()
    const route = location.pathname
    const style = route === "/expertise" ? "h-100" : ""
  
  return (
    <div className={`container d-flex align-items-center ${style} pt-5  px-5`}>
      

      <div className={`row my-5 justify-content-between`}>
      <h5>My Skills</h5>
      <h1 className="mb-5">My Expertise</h1>
        {expertiseData.map((item, index) => (
          <ExpertiseCard key={index} id={index} data={item} />
        ))}
      </div>
    </div>
  )
}
export default Expertise
