import { signInWithPopup, signOut } from "firebase/auth";

import { auth, googleAuthProvider } from "../../firebase";

const Login = () => {
    const onLoginClick = async () => {
        try {
            const res = await signInWithPopup(auth, googleAuthProvider);
            console.log(res);
            // Redirect to user to different screen
        } catch (err) {
            console.log("ERROR OCCURED WHILE LOGGIN IN", err);
        }
    };

    return (
        <button onClick={onLoginClick}>Login with Google</button>
    )
};

export default Login;