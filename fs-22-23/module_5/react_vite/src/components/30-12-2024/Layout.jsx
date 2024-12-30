import { Outlet } from "react-router-dom";
import Footer from "./Foooter";
import NavBar from "./NavBar";

const Layout = () => {
    return (
        <>
            <NavBar />
            <Outlet />
                {/* DYNAMIC CONTENT */}
                {/* if(url == "/") {
                    HOME
                } else if (url == "/contact-us") {
                    CONTACT US
                } else if (url == "/about-us") {
                    ABOUT US
                } */}
            <Footer />
        </>
    );
};

export default Layout;