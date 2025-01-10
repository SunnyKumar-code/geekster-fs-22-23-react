import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import styles from "./Login.module.css";
import { auth, googleAuthProvider } from "../../config/firebase";
import { useContext } from "react";
import { UserContext } from "../../App";

const Login = () => {

    const navigate = useNavigate();
    const userCtx = useContext(UserContext);

    const onLoginClick = async () => {
        try {
            const res = await signInWithPopup(auth, googleAuthProvider);
            const userDetails = {
                displayName: res.user.displayName,
                email: res.user.email,
                uid: res.user.uid
            }
            // console.log(res);
            localStorage.setItem("userDetails", JSON.stringify(userDetails));
            userCtx.setUser(userDetails);
            navigate("/home");
        } catch (err) {
            console.log("ERROR WHILE LOGGING IN", err);
        }
    };

    return (
        <div>
            <button onClick={onLoginClick}>Login with Google</button>
        </div>
    )
};

export default Login;