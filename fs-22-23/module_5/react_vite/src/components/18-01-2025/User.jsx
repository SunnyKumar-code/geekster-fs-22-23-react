import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setMobileNo, setUserName } from "../../slices/userSlice";
import { useRef, useState } from "react";
import { useGetUserDetailsQuery, usePostEnquiryMutation } from "../../services/api";
import api from "../../services/api";

const User = () => {
    const dispatch = useDispatch();
    const userData = useSelector(state => state.user);

    const formRef = useRef();
    const [postEnquiry, { isError, isLoading }] = usePostEnquiryMutation();
    console.log("isLoading", isLoading);
    console.log("isError", isError);
    // const { data, error, isLoading } = useGetUserDetailsQuery();
    // console.log(data, error, isLoading)

    // const [isLoading, setLoading] = useState(false);
    // const [error, setError] = useState("");

    // const getUserDetails = async () => {
    //     if (!userData.userName && !userData.mobileNo) {
    //         setLoading(true);
    //         try {
    //             const response = await axios.get("https://dummyjson.com/users/1")
    //             // console.log(response.data.username, response.data.phone)
    //             dispatch(setUserName(response.data.username))
    //             dispatch(setMobileNo(response.data.phone))
    //         } catch (err) {
    //             console.log(err);
    //             setError(err);
    //         }
    //         setLoading(false);
    //     }
    // };

    const getUserDetails = async () => {
        const { data, isLoading, error } = await dispatch(api.endpoints.getUserDetails.initiate({ userId: 5 }));
        console.log(data, isLoading, error);
    };

    const onFormSubmit = async (e) => {
        e.preventDefault();
        console.log("Form submitted");
        // console.log(formRef.current.name.value)
        // console.log(formRef.current.enquiryMsg.value)
        const body = {
            username: formRef.current.name.value,
            password: formRef.current.enquiryMsg.value,
        }
        await postEnquiry(body);
    };

    return (
        <>
            <h2>User Component</h2>
            <button onClick={getUserDetails}>Get User Details</button>
            Name : {userData.userName} <br />
            Mobile No : {userData.mobileNo}
            <div>
                <form ref={formRef} onSubmit={onFormSubmit}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input name="name" type="text" id="name" />
                    </div>
                    <div>
                        <label htmlFor="enquiryMsg">Enquiry Message</label>
                        <textarea name="enquiryMsg" id="enquiryMsg" />
                    </div>
                    <input type="submit" />
                </form>
            </div>
        </>
    )
};

export default User;