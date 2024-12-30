import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <ul style={{
            display: "flex",
            justifyContent: "space-around",
            listStyle: "none"
        }}>
            <li>
                {/* <a href="/">Home</a> */}
                <Link to={"/"}>Home</Link>
            </li>
            <li>
                {/* <a href="/about-us">About Us</a> */}
                <Link to={"/about-us"}>About Us</Link>
            </li>
            <li>
                {/* <a href="/contact-us">Contact Us</a> */}
                <Link to={"/contact-us"}>Contact Us</Link>
            </li>
        </ul>
    )
};

export default NavBar;