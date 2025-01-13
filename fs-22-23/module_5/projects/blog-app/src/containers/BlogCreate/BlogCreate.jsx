import { useContext, useRef } from "react";
import { collection, addDoc, updateDoc, getDoc, deleteDoc } from "firebase/firestore";

import { firestore } from "../../config/firebase";
import styles from "./BlogCreate.module.css";
import { UserContext } from "../../App";

const BlogCreate = () => {

    const titleRef = useRef(null);
    const bodyRef = useRef(null);

    const userCtx = useContext(UserContext);

    const blogCollectionRef = collection(firestore, "blogs");

    const onFormSubmit = async (e) => {
        e.preventDefault();
        const blog = {
            title: titleRef.current.value,
            body: bodyRef.current.value,
            createdBy: userCtx.user.email
        }
        console.log(blog);
        //Todo: Save the data to firestore db
        try {
            await addDoc(blogCollectionRef, blog);
            alert("Blog saved successfully");
        } catch (err) {
            console.log("ERROR CREATING NEW BLOG IN DB", err);
        }
    };

    return (
        <>
            <h3>Create New Blog</h3>
            <form onSubmit={onFormSubmit}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input ref={titleRef} type="text" id="title" />
                </div>

                <div>
                    <label htmlFor="body">Body</label>
                    <textarea ref={bodyRef} id="body" />
                </div>
                <button type="submit">Create Blog</button>
            </form>
        </>
    )
};

export default BlogCreate;