import React, { useEffect, useState } from "react"
import axios from "axios"
import PortfolioCard from "../components/PortfolioCard"
import AdsClickIcon from "@mui/icons-material/AdsClick"
import { useLocation } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"

function Portfolio() {
  const axiosInstance = axios.create({baseURL : process.env.REACT_APP_API_URL })
  const location = useLocation()
  const route = location.pathname
  const style = route === "/portfolio" ? "h-100" : ""

  const [portfolios, setPortfolios] = useState([])

  useEffect(() => {
    axiosInstance
      .get("portfolio")
      .then((res) => {
        console.log("==>", res.data)
        setPortfolios(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <>
          {(route === "/portfolio") && <Header />}
      <div
        className={`container ${style} d-flex align-items-center pt-5  px-5`}
      >
        <div className="container-fluid">
          <div className="row d-flex justify-content-between">
            <div className="col-md-6  text-sm-center  text-md-start  text-lg-start px-0">
              <h1 className="my-5">Portfolio</h1>
            </div>
            <div className="col-md-6 d-flex align-items-center justify-content-end justify-content-sm-center justify-content-md-end justify-content-lg-end pr-lg-0 px-0">
              <button type="button" className="porfolioBtnVisiteMyWebsite">
                <AdsClickIcon /> viste my website
              </button>
            </div>
          </div>

          <div className="row my-5 justify-content-evenly bg-info">
            {portfolios.map((item) => (
              <PortfolioCard key={item._id} id={item._id} data={item} />
            ))}
          </div>
        </div>
      </div>
      {(route === "/portfolio") && <Footer />}
    </>
  )
}
export default Portfolio
