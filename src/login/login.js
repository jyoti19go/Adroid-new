import React from 'react'
import './login.css'
import { NavLink } from 'react-router-dom'

const login = () => {
  return (
    <>
        <div className="login-page">
            <div className="login-left">
                <div className="login-logo">
                    <img src="./images/Main-logo.png" alt="" />
                </div>
                <div className="login-main">
                            <h1>Login to your Account</h1>
                            <p>See what is going on with your business</p>
                </div>
                <div>
                    <button className='googlebtn'>
                        <img src="./images/googlelogo.png" alt="" />
                        <span>Continue with Gmail</span>
                    </button>
                </div>
                <div className="or">
                    <p>------------- or Sign in with Email ------------- </p>
                </div>
                <form action="">
                            <div>
                                <label htmlFor="email">Email</label>
                                <input placeholder='mail@abc.com' type="email" className='email' id='email' />
                            </div>
                            <div>
                                <label htmlFor="password">Password</label>
                                <input placeholder='************' type="password" className='password' id='password' />
                            </div>
                            <div className="container-checkbox">
                               <div className='remember '>
                                    <input type="checkbox" />
                                    <p>Remember Me</p>
                               </div>
                                <div className="forget">
                                    <p>Forgot Password?</p>
                                </div>
                            </div>
                            <input type="submit" className='loginbtn' value="Login" />
                            <div className="register">
                                <p>Not Registered Yet?</p>
                                <li><NavLink to="/signup">Create an account</NavLink></li>
                            </div>
                </form>
            </div>
            <div className="login-right">
                <img src="./images/Group.png" alt="" />
            </div>
        </div>
    </>
  )
}

export default login