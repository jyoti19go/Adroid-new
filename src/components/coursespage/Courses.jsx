import React from 'react'
import "./Courses.css"
import Navbar from '../homepage/HomeNavbar/Navbar'

const Courses = () => {
  return (
    <>
        <Navbar/>
        <div className="course-img">
            <img src="./images/course-main.png" alt="" />
        </div>
        <div className="sort">
            <p>Sort by</p>
            <div className="sortform">
            <form action="">
                <select id="dropdownbox" name="dropdownbox">

                    <option value="mostpopular">Most Popular</option>
                </select>
            </form>

            <form action="">
                <select id="dropdownbox" name="dropdownbox">

                    <option value="grade">Grade</option>
                </select>
            </form>
            </div>
        </div>
        
    </>
  )
}

export default Courses