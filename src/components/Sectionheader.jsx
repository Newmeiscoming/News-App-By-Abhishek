import React from 'react'

const Sectionheader = ({heading}) => {
  return (
    <nav className="navbar bg-light py-3">
  <div className="container-fluid">
    <span className="navbar-brand mb-0 h1" style={{fontSize:"30px",fontWeight:"600"}}>{heading}</span>
  </div>
</nav>
  )
}

export default Sectionheader