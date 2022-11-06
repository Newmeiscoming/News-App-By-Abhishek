import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import API from '../config/Api';
import Card from './Card';
import "../components/Categories.css";

const Entertainment = () => {
    const [data,setData] = useState([]);
    useEffect(()=>{
        fetch(API.entertainment)
        .then(res=>res.json())
        .then(res=>setData(res.articles));
    },[])
  return (
    <div className='container'>
        {
            data.map(artilce=>{
                
                return <Card data = {artilce}/>
                
            })
        }
        
    </div>
  )
}

export default Entertainment