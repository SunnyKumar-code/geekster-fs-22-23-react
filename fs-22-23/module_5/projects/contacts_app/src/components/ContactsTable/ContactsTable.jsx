import { useDispatch, useSelector } from "react-redux";

import ContactCard from "../ContactCard/ContactCard";
import styles from "./ContactsTable.module.css";
import { setEditContactId } from "../../slices/contactsSlice";

const ContactsTable = () => {

    const dispatch = useDispatch();
    const contactsList = useSelector((state) => state.contacts.contactsList);
    const searchKey = useSelector(state => state.contacts.searchKey);
    // console.log(searchKey);

    const onEditContact = (id) => {
        console.log(id)
        dispatch(setEditContactId(id));
    };

    const filterResults = (contact) => {
        return contact.name.toLowerCase().includes(searchKey.toLowerCase())
    }

    const filteredContacts = searchKey ? contactsList.filter(filterResults) : contactsList;

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
                    filteredContacts
                        .map(contact => <ContactCard onEditContact={onEditContact} key={contact.id} {...contact} />)
                }
            </tbody>
        </table>
    )
};

export default ContactsTable;