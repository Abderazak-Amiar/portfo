import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function ExpertiseCard(props) {
  
  return (
    

        <div className="col-md-2 mb-2  rounded bgExpertiseCard ">
            <a className="aStyle" href={props.data.link}>
            <FontAwesomeIcon icon={props.data.icon} size="3x" className="iconStyleExpertise"/>
            <h3> {props.data.title} </h3>
            <p>{props.data.content}</p>
            </a>
        </div>
)
}

export default ExpertiseCard;