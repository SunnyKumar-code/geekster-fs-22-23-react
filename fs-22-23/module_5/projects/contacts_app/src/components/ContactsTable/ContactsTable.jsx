
import ContactCard from "../ContactCard/ContactCard";
import styles from "./ContactsTable.module.css";

const ContactsTable = () => {
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
                <ContactCard />
                <ContactCard />
                <ContactCard />
                <ContactCard />
            </tbody>
        </table>
    )
};

export default ContactsTable;