import React from "react"
import PortfolioCard from "../components/PortfolioCard";
import portfolioData from "../api/portfolioData"
import AdsClickIcon from '@mui/icons-material/AdsClick';
 
function Portfolio(){return(

<div className="container mt-5 h-100">
    <div className="row d-flex justify-content-between">
        <div className="col-md-6  text-sm-center  text-md-start  text-lg-start px-0"> <h1 className="my-5">Portfolio</h1></div>
        <div className="col-md-6 d-flex align-items-center justify-content-end justify-content-sm-center justify-content-md-end justify-content-lg-end pr-lg-0 px-0"><button type="button" className="porfolioBtnVisiteMyWebsite"><AdsClickIcon/> viste my website</button></div>
    </div>
   

    <div className="row my-5 justify-content-between">
        {
            portfolioData.map((item, index) => <PortfolioCard key={index} id={index}  data={item} />)
        }
    </div>
    
</div>

)}export default Portfolio;