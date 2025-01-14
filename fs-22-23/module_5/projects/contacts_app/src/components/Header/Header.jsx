import styles from "./Header.module.css";

const Header = () => {
    return (
        <div className={styles.container}>
            <form>
                <input type="text" placeholder="Search contact.." />
                <button>Search</button>
            </form>
        </div>
    )
};

export default Header;