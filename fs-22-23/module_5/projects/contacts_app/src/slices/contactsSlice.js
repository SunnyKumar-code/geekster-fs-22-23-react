import { createSlice } from "@reduxjs/toolkit";

/**
 * THE MUTATING OF ORIGINAL STATE IS NOT DONE, IT LOOKS LIKE MUTATION BUT BEHIND THE SCENE A COPY IS CREATED BY TOOLKIT
 */

/**
 * ADD_CONTACT
 * EDIT_CONTACT
 * DELETE_CONTACT,
 * MARK_FAVOURITE
 */

/**
 * reducerFn = (state, action) => {
* switch(action.type) {
*  case "ADD_CONTACT":
const copy = [...state.contactsList, new item]
*      return {
...state,
contactsList : copy
}
*  case "EDIT_CONTACt"
* }
 * }
 */

const initState = {
    contactsList: [],
    editContactId: ""
}

const contactSlice = createSlice({
    name: "CONTACTS",
    initialState: initState,
    reducers: {
        addContact: (state, action) => {
            state.contactsList.push(action.payload);
        },
        editContact(state, action) {
            // Edit the contact
            // console.log(action.payload)
            const index = state.contactsList.findIndex(contact => contact.id == state.editContactId)
            console.log(index);

            state.contactsList.splice(index, 1, action.payload)
            state.editContactId = "";
        },
        deleteContact(state, action) {

        },
        markContactAsFavourite(state, action) {

        },
        setEditContactId(state, action) {
            state.editContactId = action.payload;
        },
    }
});

export const { addContact, editContact, deleteContact, markContactAsFavourite, setEditContactId } = contactSlice.actions;
export default contactSlice.reducer;