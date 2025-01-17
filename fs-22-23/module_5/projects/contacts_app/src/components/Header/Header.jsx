import { useDispatch } from "react-redux";

import styles from "./Header.module.css";
import { setSearchKey } from "../../slices/contactsSlice";
import ContactCard from "../ContactCard/ContactCard";

const Header = () => {

    const dispatch = useDispatch();

    const onInputChange = (e) => {
        // console.log(e.target.value);
        dispatch(setSearchKey(e.target.value));
    };

    return (
        <div className={styles.container}>
            <form>
                <input onChange={onInputChange} type="text" placeholder="Search contact.." />
                <ContactCard onEditContact={() => alert("contact edited")} name="test card" surname="test card" mobileNo="test card" id="12"/>
                {/* <button>Search</button> */}
            </form>
        </div>
    )
};

export default Header;