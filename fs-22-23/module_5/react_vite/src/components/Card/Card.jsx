import styles from "./Card.module.css";

const Card = ({
    title,
    imageUrl,
    description,
    likes,
    comments
}) => {

    return (
        <div className={styles.container}>
            <h3>{title}</h3>
            <img src={imageUrl} />
            <p>{description}</p>
            <span>Likes : {likes}</span>
            <span>Comments: {comments.length}</span>
            <div>
                <h4>Comments</h4>
                {
                    comments.map((comment, index) => {
                        return <p key={`${comment}_${index}`}>{comment}</p>
                    })
                }
            </div>
        </div>
    )
};

export default Card;