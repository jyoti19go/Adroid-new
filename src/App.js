import React from "react";
import { Stack } from "@mui/material";
import Navbar from "./components/Navbar/Navbar"
import Sidebar from "./components/Navbar/Sidebar/Sidebar";
import Feed from "./components/Navbar/Feed/Feed";
import Rightbar from "./components/Navbar/Rightbar/Rightbar";

function App() {
  return (
    <>
      <Navbar/>
      <Stack direction="row" >
        <div>
          <Sidebar/>
        </div>
        <Feed/>
        <Rightbar/>
      </Stack>
     </>
 );
}

export default App;
