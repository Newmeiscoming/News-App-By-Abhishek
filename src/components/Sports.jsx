import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import API from '../config/Api';
import Card from './Card';
import "../components/Categories.css";
import Sectionheader from './Sectionheader';
import {AiFillCaretLeft, AiFillCaretRight} from "react-icons/ai"

const Sports = () => {
    const [data,setData] = useState([]);
    const [sliderValue,setSliderValue] = useState(0);
    useEffect(()=>{
        fetch(API.sports)
        .then(res=>res.json())
        .then(res=>setData(res.articles));
    },[])
    function slider(direction){
        if (direction === "left") {
            if(sliderValue>0){
                
                setSliderValue(sliderValue - 1);
            }
          
        } else {
          
            setSliderValue(sliderValue + 1);
          
        }
      }
  return (
    <div>
        <Sectionheader heading={"Sports"}/>
    <div className='container-div' style={{transform:`translateX(${sliderValue*-100}vw)`,transition: "all 1.5s ease"}}>
        {
            data.map(article=>{
                
                return <Card data = {article}/>
                
            })
        }
        
        </div>
        <div style={{marginTop:"30px",fontSize:"30px"}}>

<button style={{border:"none",borderRadius:"50%",width:"60px",height:"60px",marginRight:"10px"}} onClick={()=>slider("left")}><AiFillCaretLeft/></button>
<button style={{border:"none",borderRadius:"50%",width:"60px",height:"60px",marginLeft:"10px"}} onClick={()=>slider("right")}><AiFillCaretRight/></button>
</div>
        
    </div>
  )
}

export default Sports;