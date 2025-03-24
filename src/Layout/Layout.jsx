import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";


const Layout = () => {
    return (
        <><div className="max-w-screen-[1400px]">
            <Outlet></Outlet>
            <Footer></Footer>
        </div>

        </>
    );
};

export default Layout;