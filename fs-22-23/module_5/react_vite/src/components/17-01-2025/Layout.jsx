import { Link, Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                    <Link to={"/about-us"}>About Us</Link>
                    <Link to={"/contact-us"}>Contact Us</Link>
                </li>
            </ul>
            <Outlet />
        </div>
    )
};

export default Layout;