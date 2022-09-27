import React from 'react'
import './Feed.css'
import Card from './Card'


const Feed = () => {
    return (
        <>
            <div className="main-feed">
                <div className="feed">
                    <div className="feed-top">
                        <img src="./images/feedpic.png" alt="" />
                        <form action="">
                            <input type="text" placeholder='What you would like to share?' />
                        </form>
                    </div>
                    <div className="feed-bottom">
                        <div className="photo">
                            <img src="./images/photo.png" alt="" />
                            <p>Photo</p>
                        </div>
                        <div className="video">
                            <img src="./images/video.png" alt="" />
                            <p>Video</p>
                        </div>
                        <div className="article">
                            <img src="./images/article.png" alt="" />
                            <p>Article</p>
                        </div>
                        <button className='post'>Post</button>
                    </div>
                </div>
                <Card/>

            </div>
        </>
    )
}

export default Feed