import { Avatar } from '@mui/material'
import React from 'react'
import "./Rightbaroptions.css"

const Rightbaroptions = ({src,title,username}) => {
  return (
    <div className="right-mentors">
        <div className="profile-pics">
            {src && <Avatar src={src}/>}
        </div>
        <div className="data">
            <h4>{title}</h4>
            <p>{username}</p>
        </div>
    </div>
  )
}

export default Rightbaroptions