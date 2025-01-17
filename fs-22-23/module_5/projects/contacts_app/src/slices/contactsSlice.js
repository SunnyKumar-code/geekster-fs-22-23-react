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
    contactsList: [
        {
            "name": "Divyansh",
            "surname": "Moonat",
            "mobileNo": "9876543210",
            "id": "a7773576-d4cb-4f84-bd0c-52b18a35e57c",
            "isFav": false
        },
        {
            "name": "Alex",
            "surname": "D",
            "mobileNo": "123123",
            "id": "a7773576-d4cb-4f84-bd0c-52b18a35e57d",
            "isFav": false
        },
        {
            "name": "Peter",
            "surname": "DP",
            "mobileNo": "123123",
            "id": "a7773576-d4cb-4f84-bd0c-52b18a35e573",
            "isFav": false
        },
        {
            "name": "Petrik",
            "surname": "XYZ",
            "mobileNo": "456465",
            "id": "a7773576-d4cb-4f84-bd0c-52b18a25e57c",
            "isFav": false
        },
        {
            "name": "Tony",
            "surname": "S",
            "mobileNo": "458788",
            "id": "a7773576-d4cb-4f84-bd0c-52b18a35e17c",
            "isFav": false
        },
    ],
    editContactId: "",
    searchKey: ""
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
        setSearchKey(state, action) {
            state.searchKey = action.payload;
        }
    }
});

export const { addContact, editContact, deleteContact, markContactAsFavourite, setEditContactId, setSearchKey } = contactSlice.actions;
export default contactSlice.reducer;