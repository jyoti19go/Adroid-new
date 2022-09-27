import React from 'react'
import { Avatar } from '@mui/material'
import './Sidebar.css'
import SidebarOptions from './SidebarOptions'

const Sidebar = () => {
  return (
    <>
        <div className="side-main">
            <div className="side-profile">
                <div className="pro-name">
                    <Avatar className='pro-pic' alt="" src="./images/pic.png" />
                    <div className='profile-name'>
                        <h2>Monika Chauhan</h2>
                        <p className='username'>@monikachauhan45</p>
                    </div>
                </div>
                <div className="info">
                    <div className="followers">
                        <h2>1.2K</h2>
                        <p className='description'>Followers</p>
                    </div>
                    <div className="following">
                        <h2>678</h2>
                        <p className='description'>Following</p>
                    </div>
                    <div className="posts">
                        <h2>112</h2>
                        <p className='description'>Total Posts</p>
                    </div>
                </div>
            </div>
        </div>  
        <SidebarOptions src="./images/feed.png" title="Feed"/>  
        <SidebarOptions src="./images/discover.png" title="Discover"/>  
        <SidebarOptions src="./images/friends.png" title="Friends"/>  
        <SidebarOptions src="./images/community.png" title="Communities"/>  
        <SidebarOptions src="./images/videos.png" title="Videos"/>  
        <SidebarOptions src="./images/blogs.png" title="Blogs"/>  
        <SidebarOptions src="./images/settings.png" title="Settings"/>  
        <div >
            <button className="createpost">Create Post</button>
        </div>


       { /* <div className="side-menu">
                <div className="feed">
                    <img src="./images/feed.png" alt="" />
                    <p>Feed</p>
                </div>
                <div className="discover">
                    <img src="./images/discover.png" alt="" />
                    <p>Discover</p>
                </div>
                <div className="friends">
                    <img src="./images/friends.png" alt="" />
                    <p>Friends</p>
                </div>
                <div className="community">
                    <img src="./images/community.png" alt="" />
                    <p>Community</p>
                </div>
                <div className="videos">
                    <img src="./images/videos.png" alt="" />
                    <p>videos</p>
                </div>
                <div className="blogs">
                    <img src="./images/blogs.png" alt="" />
                    <p>Blogs</p>
                </div>
                <div className="settings">
                    <img src="./images/settings.png" alt="" />
                    <p>Settings</p>
                </div>
            </div> 
            */}
        
    </>
  )
}

export default Sidebar