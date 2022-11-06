import React, { useEffect } from 'react'
import API from '../config/Api';

const Technology = () => {
    useEffect(()=>{
        fetch(API.technology)
        .then(res=>res.json())
        .then(res=>console.log(res.articles));
    },[])
  return (
    <div>Technology</div>
  )
}

export default Technology