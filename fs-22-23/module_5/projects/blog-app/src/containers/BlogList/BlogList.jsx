import { collection, getDocs } from "firebase/firestore";
import styles from "./BlogList.module.css";
import { firestore } from "../../config/firebase";
import { useEffect, useState } from "react";
import BlogCard from "../../components/BlogCard/BlogCard";

const BlogList = () => {

    const blogCollectionRef = collection(firestore, "blogs");
    const [blogList, setBlogList] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const blogs = await getDocs(blogCollectionRef);
                const blogsList = blogs.docs.map(blog => ({ ...blog.data(), id: blog.id }));
                // console.log(blogsList);
                setBlogList(blogsList);
            } catch (err) {
                console.log("ERROR READING BLOGS FROM DB", err);
            }
        };
        fetchBlogs();
    }, []);

    return (
        <>
            <h3>Blog List</h3>
            {
                blogList.map(blog => <BlogCard key={blog.id} {...blog} />)
            }
        </>
    )
};

export default BlogList;