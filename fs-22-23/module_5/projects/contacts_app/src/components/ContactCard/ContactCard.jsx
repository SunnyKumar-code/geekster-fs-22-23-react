import { FaPencilAlt, FaTrashAlt, FaHeart } from "react-icons/fa";

import UserPicture from "../../assets/user.jpg";
import styles from "./ContactCard.module.css";


const ContactCard = (props) => {

    const onEditContact = () => {
        props.onEditContact(props.id)
    };

    return (
        <tr>
            <td>
                <img className={styles.userPicture} src={UserPicture} alt="User Picture" />
            </td>
            <td>
                {props.name}
            </td>
            <td>
                {props.surname}
            </td>
            <td>
                {props.mobileNo}
            </td>
            <td>
                <FaPencilAlt onClick={onEditContact} />
                <FaTrashAlt />
                <FaHeart />
            </td>
        </tr>
    )
};

export default ContactCard;