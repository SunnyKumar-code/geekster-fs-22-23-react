import { useContext } from "react";

import { UserContext } from "../../context/UserContext";

const Feeds = () => {
    const ctx = useContext(UserContext);
    console.log(ctx);

    const onUpdateMobileClick = () => {
        ctx.setUserData({
            ...ctx.userData,
            mobile: Math.random()
        });
    };

    return (
        <div style={{ border: "2px solid red", padding: "20px" }}>
            <h3>Feeds</h3>
            <button onClick={onUpdateMobileClick}>Update Mobile</button>
        </div>
    );
};

export default Feeds;