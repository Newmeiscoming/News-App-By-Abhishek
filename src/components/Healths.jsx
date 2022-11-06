import React from 'react'
import { useEffect } from 'react';
import API from '../config/Api';

const Healths = () => {
    useEffect(()=>{
        fetch(API.healths)
        .then(res=>res.json())
        .then(res=>console.log(res.articles));
    },[])
  return (
    <div>Healths</div>
  )
}

export default Healths