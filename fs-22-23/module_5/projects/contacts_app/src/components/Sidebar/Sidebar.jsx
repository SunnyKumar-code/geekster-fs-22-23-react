import { useRef } from "react";

const Sidebar = () => {

    const nameRef = useRef();
    const surnameRef = useRef();
    const mobileNoRef = useRef();

    const onAddContact = (e) => {
        e.preventDefault();
        const contactDetails = {
            name: nameRef.current.value,
            surname: surnameRef.current.value,
            mobileNo: mobileNoRef.current.value
        };
        console.log(contactDetails);
    };

    return (
        <aside>
            <div>
                <h3>All Contacts</h3>
                <span>1 Contact</span>
            </div>
            <div>
                <h3>Favourites</h3>
                <span>0 Contact</span>
            </div>
            <form onSubmit={onAddContact}>
                <div>
                    <input ref={nameRef} type="text" placeholder="Name" />
                    <input ref={surnameRef} type="text" placeholder="Surname" />
                </div>
                <div>
                    <input ref={mobileNoRef} type="text" placeholder="Mobile No" />
                </div>
                <button type="submit">Add</button>
            </form>
        </aside>
    )
};

export default Sidebar;