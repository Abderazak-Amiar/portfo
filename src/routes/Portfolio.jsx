import React from "react"
import PortfolioCard from "../components/PortfolioCard"
import portfolioData from "../api/portfolioData"
import AdsClickIcon from "@mui/icons-material/AdsClick"
import { useLocation } from "react-router-dom"
function Portfolio() {
  const location = useLocation()
  const route = location.pathname
  const style = route === "/portfolio" ? "h-100" : ""

  return (
    <div className={`container ${style} d-flex align-items-center pt-5  px-5`}>
      <div>
        <div className="row d-flex justify-content-between">
          <div className="col-md-6  text-sm-center  text-md-start  text-lg-start px-0">
            {" "}
            <h1 className="my-5">Portfolio</h1>
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-end justify-content-sm-center justify-content-md-end justify-content-lg-end pr-lg-0 px-0">
            <button type="button" className="porfolioBtnVisiteMyWebsite">
              <AdsClickIcon /> viste my website
            </button>
          </div>
        </div>

        <div className="row my-5 justify-content-between">
          {portfolioData.map((item, index) => (
            <PortfolioCard key={index} id={index} data={item} />
          ))}
        </div>
      </div>
    </div>
  )
}
export default Portfolio
