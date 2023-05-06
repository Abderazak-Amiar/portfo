import React from 'react'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
function PortfolioCard({data}) {
  return (
    <div className='col-md-2 rounded stylePortfolioCard'>
        <img  src={data.image} alt=""  className="w-100 h-auto m-0 p-0"/>
        <div className='py-3'>
        <h3>{data.title}</h3>
        <p>{data.content}</p>
        <a href={data.link}>view it in github <ArrowOutwardIcon/></a>
        </div>
     
    </div>
  )
}

export default PortfolioCard;