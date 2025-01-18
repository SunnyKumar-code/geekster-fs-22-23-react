import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "USER",
    initialState: {
        userName: "",
        mobileNo: ""
    },
    reducers: {
        // fns
        setUserName(state, action) {
            state.userName = action.payload
        },
        setMobileNo(state, action) {
            state.mobileNo = action.payload
        }
    }
})

export const { setMobileNo, setUserName } = userSlice.actions;

export default userSlice.reducer;