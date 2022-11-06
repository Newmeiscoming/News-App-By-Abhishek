import React from 'react'
import "../components/Categories.css"

const Card = ({data}) => {
  if(data.urlToImage===null){
    return;
  }
  return (
    <div className='card-div'>
        <div className="image" >
          <img  style={{borderRadius:"4px",width:"500px",height:"350px"}} src={data.urlToImage} alt="" />
        </div>
        <div className="info">
          <h3 style={{width:"600px",fontWeight:"300",color:"#44444d"}}>{data.title}</h3>
          <p><strong>short</strong> by {data.author} at {data.publishedAt}</p>
          <p style={{width:"600px",color:"#44444d"}}>
          {data.description}
          </p>
          <a style={{textDecoration:"none"}} href={data.url}><span >read more at <strong style={{color:"red"}}>{data.source.name}</strong></span></a>
        </div>
    </div>
  )
}

export default Card