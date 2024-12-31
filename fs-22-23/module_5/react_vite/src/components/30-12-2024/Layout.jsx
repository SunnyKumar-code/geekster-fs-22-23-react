import { Outlet } from "react-router-dom";
import Footer from "./Foooter";
import NavBar from "./NavBar";

const Layout = () => {
    return (
        <>
            <NavBar /> {/* Header */}
            <Outlet />
            <Footer />
        </>
    );
};

export default Layout;