import { useEffect, useState } from "react";

import axios from "axios";

import styles from "./Api.module.css";

const Api = () => {

    const [posts, setPosts] = useState([]);
    const [err, setErr] = useState("");
    const [loading, setLoading] = useState(false);

    const getData = async () => {
        setLoading(true);
        try {
            const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
            console.log(res.data);
            setPosts(res.data);
        } catch (err) {
            console.log(err.response.data);
            // alert("Something went wrong");
            setErr("Something went wrong");
        }
        setLoading(false);
    };

    const onGetFeedsClick = () => {
        getData();
    };

    useEffect(() => {
        const startTime = new Date().getTime();
        // axios.get("/track-user?startTime=" + startTime)

        return () => {
            // Unmounting phase
            // const endTime = new Date().getTime() - startTime
            axios.get("/track-user?endTime=" + endTime)
        }
    }, []);

    useEffect(() => {
        console.log("Loading value changed", loading)
    }, [loading]);

    useEffect(() => {
        // Mounting phase
        // fetch("https://jsonplaceholder.typicode.com/postsasdasdas")
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log("API RESPONSE", data);
        //         // Check the data before saving it
        //         setPosts(data);
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //         alert("Something went wrong");
        //     })

        // axios.get("https://jsonplaceholder.typicode.com/posts")
        //     .then(res => {
        //         console.log(res);
        //         setPosts(res.data);
        //     })
        //     .catch(err => {
        //         console.log(err);
        //         alert("Something went wrong");
        //     })
        //     .finally(() => {
        //         // setLoading(false)
        //     })

        // getData();

    }, []);

    return (
        <>
            <h2>APIs</h2>
            {
                err ? err : ""
            }
            <button onClick={onGetFeedsClick}>Get Feeds</button>
            <br />
            {/* {
                loading ? <img src="https://i.gifer.com/ZZ5H.gif" alt="Loader" /> : <img src="some other image" />
            } */}
            {
                loading && <img src="https://i.gifer.com/ZZ5H.gif" alt="Loader" />
            }

            {
                posts.map((post) => <div key={post.id} className={styles.card}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>)
            }

        </>
    )
};

export default Api;