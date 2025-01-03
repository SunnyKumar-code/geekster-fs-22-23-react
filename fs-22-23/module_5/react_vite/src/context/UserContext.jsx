import { createContext, useState } from "react";


export const UserContext = createContext();

const UserContextProvider = (props) => {
    // console.log(props)
    const [userData, setUserData] = useState({
        name: "Peter Parker",
        mobile: "7897897894"
    });

    return (
        <>
            <UserContext.Provider value={{ userData, setUserData }}>
                {/* WHOLE APP SHOULD BE WRAPPED HERE */}
                {props.children}
            </UserContext.Provider>
        </>
    )
};

export default UserContextProvider;