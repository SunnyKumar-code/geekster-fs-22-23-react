import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import api from "./services/api";

const store = configureStore({
    reducer: {
        // Reducers
        user: userReducer, // reducer
        [api.reducerPath]: api.reducer // api reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
});

export default store;