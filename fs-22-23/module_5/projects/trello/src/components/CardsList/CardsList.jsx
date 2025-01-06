import { useRef, useState, useContext } from "react";

import { TasksContext } from "../../App";
import Card from "../Card/Card";
import styles from "./CardsList.module.css";

const CardsList = ({ typeOfList, heading }) => {

    const textBoxRef = useRef();
    const ctx = useContext(TasksContext);
    console.log(ctx);

    const [addCardFormVisible, setAddCardFormVisible] = useState(false);

    const onAddCardClick = () => {
        setAddCardFormVisible(true);
    }

    const onCancelClick = () => {
        setAddCardFormVisible(false);
    };


    const onAddClick = () => {
        const taskTitle = textBoxRef.current.value;
        ctx.dispatch({
            type: "ADD_ITEM",
            payload: {
                typeOfList: typeOfList, // This variable identifies the list to add the date i.e pending/inprogress/completed
                taskTitle: taskTitle
            }
        });
        // Add the data to the list
    };

    const renderCreateCard = () => {
        if (addCardFormVisible) {
            return <div>
                {/* FORM TO ADD NEW ITEM */}
                <textarea ref={textBoxRef} />
                <button onClick={onAddClick}>Add Card</button>
                <button onClick={onCancelClick}>Cancel</button>
            </div>
        } else {
            return <button onClick={onAddCardClick} className={styles.addBtn}>+ Add Another Card</button>
        }
    };

    return (
        <div className={styles.container}>
            <h2>{heading}</h2>
            {renderCreateCard()}

        </div>
    );
};

export default CardsList;