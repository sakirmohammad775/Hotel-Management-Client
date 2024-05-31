import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";


const Layout = () => {
    return (
       <>
       <Navbar></Navbar>
       <Outlet></Outlet>
       </>
    );
};

export default Layout;