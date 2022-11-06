import React from 'react'
import "../components/Navbar.css";
import {FaUserCircle} from "react-icons/fa"
import {BiLogOut} from "react-icons/bi"
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  const navigate = useNavigate();
  function handleSignOut(){
    navigate("/login");
    localStorage.removeItem("name");
  }
  return (
    <div className='nav'>
        <div className="icon">
            <h2><span style={{fontSize:"40px",paddingRight:"15px"}}><FaUserCircle/></span>{localStorage.getItem("name")}</h2>
        </div>
        <img src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png" height="100%" style={{cursor:"pointer"}} alt="" />
        <div  className="icon">
            <h3 onClick={handleSignOut} style={{cursor:"pointer"}}>Sign-out<span style={{fontSize:"30px",paddingLeft:"15px"}}><BiLogOut/></span></h3>
        </div>
    </div>
  )
}

export default Navbar