import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useContext } from "react";
import { UserContext } from "../../App";

const Header = () => {

    const userCtx = useContext(UserContext);
    // console.log(userCtx);

    return (
        <div className={styles.container}>
            <ul>
                <li>
                    <Link to={"/home"}>Home</Link>
                </li>

                <li>
                    <Link to={"/create"}>Create Blog</Link>
                </li>

            </ul>
            <div>
                <span>{userCtx.user.displayName && `${userCtx.user.displayName.split(" ")[0].substring(0, 1)} ${userCtx.user.displayName.split(" ")[1].substring(0, 1)}`}</span>
            </div>
        </div>
    )
};

export default Header;