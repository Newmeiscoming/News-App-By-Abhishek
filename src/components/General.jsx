import React from 'react'
import { useEffect } from 'react';
import API from '../config/Api';

const General = () => {
    useEffect(()=>{
        fetch(API.general)
        .then(res=>res.json())
        .then(res=>console.log(res.articles));
    },[])
  return (
    <div>General</div>
  )
}

export default General