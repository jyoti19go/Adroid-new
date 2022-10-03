import React from "react";
import Home from "./home/Home";
import Landing from "./landing/Landing";
import Courses from "./components/coursespage/Courses";
import Login from './login/login';
import SignUp from "./signup/SignUp";
import { BrowserRouter, Routes, Route} from "react-router-dom"


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={
            <>
              <Home/>
            </>
          }>
          </Route>
          <Route exact path='/' element={
                <>
                  <Landing/>
                </>
              }>
            </Route>
            <Route path="/login" element={
              <Login/>
            }>

            </Route>

            <Route path="/signup" element={
              <SignUp/>
            }>
            </Route>

            <Route path="/courses" element={
              <Courses/>
            }>
            </Route>

        </Routes>
      </BrowserRouter>
    </>
 );
}

export default App;
