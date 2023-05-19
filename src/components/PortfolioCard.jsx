import React from 'react'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
function PortfolioCard({data}) {

  const imageURL = "http://localhost:3001/uploads/images/"+data.image

  return (
    <div className='col-md-3 rounded stylePortfolioCard px-0 mb-3'>
        <img  src={imageURL} alt=""  className="w-100 h-auto m-0 p-0 rounded-top"/>
        <div className='p-3'>
        <h3>{data.title}</h3>
        <p>{data.content}</p>
        <a href={data.link}>view it in github <ArrowOutwardIcon/></a>
        </div>
     
    </div>
  )
}

export default PortfolioCard;