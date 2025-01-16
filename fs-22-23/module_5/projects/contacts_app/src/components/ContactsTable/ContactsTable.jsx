import { useDispatch, useSelector } from "react-redux";

import ContactCard from "../ContactCard/ContactCard";
import styles from "./ContactsTable.module.css";
import { setEditContactId } from "../../slices/contactsSlice";

const ContactsTable = () => {

    const dispatch = useDispatch();
    const contactsList = useSelector((state) => state.contacts.contactsList);
    console.log(contactsList);

    const onEditContact = (id) => {
        console.log(id)
        dispatch(setEditContactId(id));
     };

    return (
        <table className={styles.contactsTable}>
            <thead>
                <tr>
                    <th>Profile</th>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Mobile</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    contactsList.map(contact => <ContactCard onEditContact={onEditContact} key={contact.id} {...contact} />)
                }
            </tbody>
        </table>
    )
};

export default ContactsTable;