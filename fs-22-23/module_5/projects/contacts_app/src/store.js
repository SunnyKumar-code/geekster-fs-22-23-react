import { configureStore } from "@reduxjs/toolkit";
import logger from 'redux-logger'

import contactsReducer from "./slices/contactsSlice";

const store = configureStore({
    reducer: {
        contacts: contactsReducer
    },
    middleware: (getDefaultMiddlewares) => ([...getDefaultMiddlewares(), logger])
});

export default store;