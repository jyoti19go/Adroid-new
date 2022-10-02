import React from "react";

import Home from "./homepage/home";
import Navbar from './components/Navbar/index'
import Footer from './components/Footer/Footer';
import Intro from './components/Introduction/Intro';
import Sliding from './components/Sliding/Sliding';
import Form from './components/Form/Form';
import Who from './components/WhoWeAre/Who';
import Different from './components/MakeUsDifferent/MakeUsDifferent';
import OurMission from './components/OurMission/OurMission';
import HowItWorks from './components/HowItWorks/HowItWorks';
import Login from './login/login'
import SignUp from "./signup/SignUp";
import { BrowserRouter, Routes, Route} from "react-router-dom"


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={
            <Home/>
          }>
          </Route>
          <Route exact path='/' element={
                <>
                <Navbar/>
                <Intro/>
                <Sliding/>
                <Different/>
                <OurMission/>
                <HowItWorks/>
                <Who/>
                <Form/>
                <Footer/> 
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

        </Routes>
      </BrowserRouter>
    </>
 );
}

export default App;
