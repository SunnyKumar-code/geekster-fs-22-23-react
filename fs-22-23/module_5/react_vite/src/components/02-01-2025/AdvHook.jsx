import { useState, useReducer } from "react";

const AdvHook = () => {

    const initialData = {
        fName: "",
        lName: "",
        mobile: "",
        address: "",
        error: ""
    };

    const reducerFn = (state, action) => {
        // console.log(state, action.type, action.payload)
        // Todo: Write conditions in fn to inform which variable to update
        switch (action.type) {
            case "SET_FNAME":
                return {
                    ...state,
                    fName: action.payload
                }
            case "SET_LNAME":
                return {
                    ...state,
                    lName: action.payload
                }
            case "SET_MOBILE":
                return {
                    ...state,
                    mobile: action.payload
                }
            case "SET_ADDRESS":
                return {
                    ...state,
                    address: action.payload
                }
            case "SET_ERROR":
                return {
                    ...initialData,
                    error: action.payload
                }
        }
    };

    // Syntax : const [state, dispatch] =  useReducer(reducerFn, initialState)
    const [state, dispatch] = useReducer(reducerFn, initialData);

    const onFormSubmit = (e) => {
        e.preventDefault();
        // ToDo : API Call & submit the data
        // setError("Something went wrong, please try again later");
        dispatch({ type: "SET_ERROR", payload: "Something went wrong, please try again later" })
    };

    // const user = {
    //     fName: "",
    //     lName: "",
    //     mobile: "",
    //     address: ""
    // }

    return (
        <>
            <h1>useReducer</h1>
            <form onSubmit={onFormSubmit}>
                <div>
                    <label htmlFor="fName">First Name</label>
                    <input onChange={(e) => dispatch({ type: "SET_FNAME", payload: e.target.value })} type="text" id="fName" />
                </div>

                <div>
                    <label htmlFor="lName">Last Name</label>
                    <input onChange={(e) => dispatch({ type: "SET_LNAME", payload: e.target.value })} type="text" id="lName" />
                </div>

                <div>
                    <label htmlFor="mobile">Mobile</label>
                    <input onChange={(e) => dispatch({ type: "SET_MOBILE", payload: e.target.value })} type="number" id="mobile" />
                </div>

                <div>
                    <label htmlFor="address">Address</label>
                    <input onChange={(e) => dispatch({ type: "SET_ADDRESS", payload: e.target.value })} type="text" id="address" />
                </div>
                <div>
                    {state.error && <span style={{ color: "red" }}>{state.error}</span>}
                </div>
                <input type="submit" value={"Submit"} />
            </form>

            <div>
                {`Mr/Mrs/Miss ${state.fName} ${state.lName}`}
            </div>
        </>
    );
};

export default AdvHook;