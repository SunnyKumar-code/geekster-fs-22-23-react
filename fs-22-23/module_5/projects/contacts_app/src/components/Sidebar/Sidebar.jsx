import { useEffect, useId, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';

import { addContact, editContact } from "../../slices/contactsSlice";

const Sidebar = () => {

    const dispatch = useDispatch();
    const contactsList = useSelector(state => state.contacts.contactsList);
    const editContactId = useSelector(state => state.contacts.editContactId);

    // console.log(editContactId);

    const nameRef = useRef();
    const surnameRef = useRef();
    const mobileNoRef = useRef();

    useEffect(() => {
        if (editContactId) {
            const contactToEdit = contactsList.find(contact => contact.id === editContactId);// Finding the contact to be edited with the help of unique id
            // console.log(contactToEdit)
            nameRef.current.value = contactToEdit.name;
            surnameRef.current.value = contactToEdit.surname;
            mobileNoRef.current.value = contactToEdit.mobileNo;
        }
    }, [editContactId]);

    const onAddContact = (e) => {
        e.preventDefault();
        const contactDetails = {
            name: nameRef.current.value,
            surname: surnameRef.current.value,
            mobileNo: mobileNoRef.current.value,
            id: editContactId ? editContactId : uuidv4(),
            isFav: false
        };
        // console.log(contactDetails);
        if (editContactId) {
            // Edit the contact
            dispatch(editContact(contactDetails));
        } else {
            // Add the contact
            dispatch(addContact(contactDetails)); // Dispatching a redux action (fn)
        }

        nameRef.current.value = "";
        surnameRef.current.value = "";
        mobileNoRef.current.value = "";
    };

    return (
        <aside>
            <div>
                <h3>All Contacts</h3>
                <span>{contactsList.length} Contact</span>
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
                <button type="submit">{editContactId ? "Edit" : "Add"}</button>
            </form>
        </aside>
    )
};

export default Sidebar;