import { useContext } from "react";

import { UserContext } from "../../context/UserContext";
import Feeds from "./Feeds";

const Main = () => {
    const ctx = useContext(UserContext);
    return (
        <div style={{border: "2px solid black", padding: "20px"}}>
            <h2>Main</h2>
            Name: {ctx?.userData?.name} <br />
            Mobile : {ctx?.userData?.mobile}
            <Feeds />
        </div>
    );
};

export default Main;