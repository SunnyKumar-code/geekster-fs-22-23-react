import { FaPencilAlt, FaTrashAlt, FaHeart } from "react-icons/fa";

import UserPicture from "../../assets/user.jpg";
import styles from "./ContactCard.module.css";


const ContactCard = () => {
    return (
        <tr>
            <td>
                <img className={styles.userPicture} src={UserPicture} alt="User Picture" />
            </td>
            <td>
                Lime
            </td>
            <td>
                Elision
            </td>
            <td>
                9876543210
            </td>
            <td>
                <FaPencilAlt />
                <FaTrashAlt />
                <FaHeart />
            </td>
        </tr>
    )
};

export default ContactCard;