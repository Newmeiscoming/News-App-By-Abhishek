import React from 'react'

const Drawer = () => {
    const categories = ["business","entertainment","general","healths","cience","sports","technology"];
  return (
    <div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
      Dropdown button
    </button>
    <ul class="dropdown-menu">
        {
            categories.map(e=>{
                return <li className="dropdown-item">{e}</li>
            })
        }
      
      
    </ul>
  </div>
  )
}

export default Drawer