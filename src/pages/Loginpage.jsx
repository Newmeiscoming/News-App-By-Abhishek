import { signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../config/fireBaseConfig';

const Loginpage = () => {
  const navigate = useNavigate();
  const [input,setInput] = useState({});
  const [message,setMessage] = useState("");
  function handleSubmit(e){
    e.preventDefault();
    if(!input.email||!input.password){
      setMessage("Please fill all the fields");
      return;
    }
    signInWithEmailAndPassword(auth,input.email,input.password)
    .then( res=>{
        let user = res.user;
        localStorage.setItem("name",user.displayName);
        alert(`Welcome ${user.displayName}`);
        navigate("/");
    }).catch(err=>{
      setMessage(err.message);
    })

  }
  return (
    <div className="center">
      <h1>Login</h1>
      <form onSubmit={(e)=>{handleSubmit(e)}}>
        <div className="txt_field">
          <input onChange={(e)=>setInput({...input,email:e.target.value})} type="text"  />
          <span></span>
          <label>Email Address</label>
        </div>
        <div className="txt_field">
          <input onChange={(e)=>setInput({...input,password:e.target.value})} type="password"  />
          <span></span>
          <label >Password</label>
        </div>
        <p style={{color:"red"}}>{message}</p>
        <div className="pass">Forgot Password?</div>
        <input type="submit" />
        <div className="signup_link">
          Not a member? <p style={{textDecoration:"underline",cursor:"pointer"}} onClick={
            ()=>navigate("/register")
          }>Signup</p>
        </div>

      </form>
    </div>

  )
}

export default Loginpage