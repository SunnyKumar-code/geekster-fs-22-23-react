import ContactsTable from "../../components/ContactsTable/ContactsTable";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";

import styles from "./Layout.module.css";

const Layout = () => {
    return (
        <div className={styles.container}>
            <Header />
            <section className={styles.section}>
                <Sidebar />
                <ContactsTable />
            </section>
        </div>
    )
};

export default Layout;