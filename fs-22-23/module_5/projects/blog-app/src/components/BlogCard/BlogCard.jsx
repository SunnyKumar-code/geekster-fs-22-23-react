import styles from "./BlogCard.module.css";

const BlogCard = (props) => {
    return (
        <div style={{ padding: "20px" }}>
            <h3>{props.title}</h3>
            <p>{props.body}</p>
            {
                props.createdBy && <span>Created By : {props.createdBy}</span>
            }
        </div>
    )
};

export default BlogCard;