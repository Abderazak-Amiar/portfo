import React from 'react'

function ExpertiseCard(props) {
const faicon = props.data.icon;
  return (
    

        <div className="col-md-2 mb-2  rounded bgExpertiseCard ">
            <a className="aStyle" href={props.data.link}>
            <i className={`bi bi-${props.data.icon} display-1`}></i>
            <h3 className='textSecondary'> {props.data.title} </h3>
            <p className='text-secondary'>{ props.data.content}</p>
            </a>
            
        </div>
)
}

export default ExpertiseCard;