import React from 'react'
import "./SignUp.css"
import { NavLink } from 'react-router-dom'

const SignUp = () => {
    return (
        <>
            <div className="sign-page">
                <div className="sign-left">
                    <div className="sign-logo">
                        <img src="./images/Main-logo.png" alt="" />
                    </div>
                    <div className="sign-main">
                        <h1>Signup to your Account</h1>
                        <p>See what is going on with your business</p>
                    </div>
                    <form action="">
                            <div className>
                                <label htmlFor="name">Name</label>
                                <input placeholder='Monica Chauhan' type="text" className='name' id='name' />
                            </div>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input placeholder='mail@abc.com' type="email" className='email' id='email' />
                            </div>
                            <div>
                                <label htmlFor="password">Password</label>
                                <input placeholder='************' type="password" className='password' id='password' />
                            </div>
                            <div>
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <input placeholder='************' type="password" className='confirmPassword' id='confirmPassword' />
                            </div>

                            <div className="checkbox-container">
                                <input type="checkbox" />
                                <p>Are you a mentor?</p>
                            </div>
                            <input type="submit" className='signbtn' value="Signup" />
                        </form>
                        <div className="haveacnt">
                            <p>Already have an accunt?</p>
                            <li><NavLink to="/login">Login</NavLink></li>
                        </div>
                </div>
                <div className="sign-right">
                    <img src="./images/Group.png" alt="" />
                </div>                
            </div>
        </>
    )
}

export default SignUp




            