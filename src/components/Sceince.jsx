import React from 'react'
import { useEffect } from 'react';
import API from '../config/Api';

const Sceince = () => {
    useEffect(()=>{
        fetch(API.sceince)
        .then(res=>res.json())
        .then(res=>console.log(res.articles));
    },[])
  return (
    <div>Sceince</div>
  )
}

export default Sceince