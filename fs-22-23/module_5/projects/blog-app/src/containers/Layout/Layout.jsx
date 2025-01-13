import { Outlet, useNavigate } from "react-router-dom";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useContext, useEffect } from "react";
import { UserContext } from "../../App";

const Layout = () => {

    const userCtx = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        console.log(userCtx)
        let localStorageUser = localStorage.getItem("userDetails");
        if (localStorageUser) {
            localStorageUser = JSON.parse(localStorageUser)
            userCtx.setUser(localStorageUser);
        }
        const isLoggedIn = userCtx.user.displayName || localStorageUser.displayName;
        if (!isLoggedIn) {
            navigate("/");
        }
    }, []);

    return (
        <>
            <Header />
            <Outlet />
            {/* <Footer /> */}
        </>
    );
};

export default Layout;