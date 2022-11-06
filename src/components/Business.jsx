import React from 'react'
import { useEffect } from 'react';
import API from '../config/Api';

const Business = () => {
    useEffect(()=>{
        fetch(API.business)
        .then(res=>res.json())
        .then(res=>console.log(res.articles));
    },[])
  return (
    <div>Business</div>
  )
}

export default Business