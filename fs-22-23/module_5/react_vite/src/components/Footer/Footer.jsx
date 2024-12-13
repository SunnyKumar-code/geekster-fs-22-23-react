// import "./Footer.css";
import styles from "./Footer.module.css";

const Footer = () => {
    const ulStyles = {
        display: "flex",
        listStyle: "none",
        gap: "10px"
    };

    return (
        <>
            <ul style={ulStyles}>
                <li className={"my-cls"}>Copyright</li>
                <li>About Us</li>
                <li>Portfolio</li>
            </ul>
            <div className={styles.card}>
                this is product card
            </div>
        </>
    )
};

export default Footer;