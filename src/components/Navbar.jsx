import React from 'react'
import "../components/Navbar.css";
import Drawer from './Drawer';


const Navbar = () => {
  return (
    <div className='nav'>
        <div className="icon">
            <Drawer/>
        </div>
        <img src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png" height="100%" style={{cursor:"pointer"}} alt="" />
    </div>
  )
}

export default Navbar