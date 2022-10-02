import { Stack } from "@mui/material";
import HomeNavbar from "../components/Home/HomeNavbar/Navbar"
import Sidebar from "../components/Home/Sidebar/Sidebar";
import Feed from "../components/Home/Feed/Feed";
import Rightbar from "../components/Home/Rightbar/Rightbar";

let Home = () => {
    return (<>
            <HomeNavbar/>
            <Stack direction="row" >
            <div>
            <Sidebar/>
            </div>
            <Feed/>
            <Rightbar/>
            </Stack>
            </>);
}

export default Home;