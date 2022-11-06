import React from 'react'
import { useEffect } from 'react'
import API from '../config/Api'

const Sports = () => {
    useEffect(()=>{
        fetch(API.sports)
        .then(res=>res.json())
        .then(res=>console.log(res.articles));
    },[])
    
  return (
    <div>Hii</div>
  )
}

export default Sports;