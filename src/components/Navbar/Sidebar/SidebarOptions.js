
import React from 'react'
import './Sidebaroptions.css'

const SidebarOptions = ({src,title}) => {
  return (
    <div className="sidebar-row">
        {src && <img src={src}/>}
        <p>{title}</p>
    </div>
  )
}

export default SidebarOptions