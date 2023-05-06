import React from "react";
import ExpertiseCard from "../components/ExpertiseCard";
import expertiseData from "../api/expertiseData";


function Expertise(){return(

    <div className="container mt-5 h-100">

            <h5>My Skills</h5>
            <h1 className="mb-5">My Expertise</h1>

            <div className="row my-5 justify-content-between">
                {
                    expertiseData.map((item, index) => <ExpertiseCard key={index} id={index}  data={item} />)
                }
            </div>
            
    </div>

    )}export default Expertise;