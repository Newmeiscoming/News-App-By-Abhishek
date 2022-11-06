import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {createUserWithEmailAndPassword,updateProfile} from "firebase/auth"
import {auth} from "../config/fireBaseConfig";
import "./register.css";

const Register = () => {
    const [input,setInput] = useState({});
    const [message,setMessage] = useState("");
    const navigate = useNavigate();
    function handleSubmit(e){
        e.preventDefault();
        if(!input.name||!input.email||!input.password){
            setMessage("Please fill  all the feilds");
            return;
        }
        createUserWithEmailAndPassword(auth,input.email,input.password)
        .then(async res=>{
            let user = res.user;
            await updateProfile(user,{
                displayName:input.name
            })
            localStorage.setItem("name",user.displayName);
            alert(`Welcome ${user.displayName}`);
            navigate("/");
        })
        .catch(err=>{
            setMessage(err.message);
        })
    }
  return (
    <div className="center">
    <h1>Register</h1>
    <form onSubmit={e=>handleSubmit(e)} >
      <div className="txt_field">
        <input onChange={(e)=>setInput({...input,name:e.target.value})} type="text"  />
        <span></span>
        <label>Username</label>
      </div>
      <div className="txt_field">
            <input onChange={(e)=>setInput({...input,email:e.target.value})} type="text"  />
        <span></span>
        <label>Email Address</label>
      </div>
      <div className="txt_field">
        <input onChange={(e)=>setInput({...input,password:e.target.value})} type="password"  />
        <span></span>
        <label>Password</label>
      </div>
      <p style={{color:"red"}}>{message}</p>
      
      <input type="submit"  />
      <div className="signup_link">
        Already a member? <p onClick={()=>navigate("/login")} style={{textDecoration:"underline",cursor:"pointer"}}>Sign In</p>
      </div>
    </form>
  </div>

  )
}

export default Register