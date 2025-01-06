import styles from "./Card.module.css";

const Card = ({ title }) => {
    return (
        <div className={styles.card}>
            <span>{title}</span>
        </div>
    );
};

export default Card;