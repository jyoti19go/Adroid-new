import React from 'react'
import './Card.css'

const Card = (props) => {
    return (
        <div className="card">
            <div className="card-top">
                <div className="cardtop-left">
                    <img src="./images/fpic1.png" alt="" />
                    <div className="intro">
                        <div className='intro-name'>
                            <h2>Zach Hiwai</h2>
                            <img src="./images/dot.png" alt="" />
                            <span>Follow</span>
                        </div>
                        <div className="about">
                            <p>Educator at Modern High School</p>
                        </div>
                    </div>

                </div>
                <div className="cardtop-right">
                    <img src="./images/dots.png" alt="" />
                    <p>3 minutes ago</p>
                </div>
            </div>
            <div className="card-mid">
                <p>Researchers developed a machine learning model capable of estimating national weekly opioid overdose mortality trends in near real-time using proxy data sources such as public health information and law enforcement data.</p>
                <img src="./images/main2.png" alt="" />
            </div>
            <br />
            <div className="card-bottom">
                <img src="./images/pic.png" alt="" />
                <div className="comment">
                    <form action="">
                    <input className='cardinput' type="text" placeholder='Add comment ...' />
                    </form>
                    <img src="./images/emoji.png" alt="" />
                    <img src="./images/pictures.png" alt="" />
                </div>
                <div className="share">
                    <img src="./images/clap.png" alt="" />
                    <p>126</p>
                    <img src="./images/comments.png" alt="" />
                    <p>58</p>
                    <img src="./images/share.png" alt="" />
                    <p>45</p>
                </div>
            </div>

        </div>

    )
}

export default Card