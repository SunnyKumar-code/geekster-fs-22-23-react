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
    contactsList: []
}

const contactSlice = createSlice({
    name: "CONTACTS",
    initialState: initState,
    reducers: {
        addContact: (state, action) => {
            state.contactsList.push(action.payload);
        },
        editContact(state, action) {

        },
        deleteContact(state, action) {

        },
        markContactAsFavourite(state, action) {

        }
    }
});

export default contactSlice.reducer;