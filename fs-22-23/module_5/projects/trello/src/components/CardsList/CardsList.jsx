import { useRef, useState, useContext } from "react";

import { useDrop } from "react-dnd";

import { TasksContext } from "../../App";
import Card from "../Card/Card";
import styles from "./CardsList.module.css";

const CardsList = ({ typeOfList, heading }) => {

    const textBoxRef = useRef();
    const ctx = useContext(TasksContext);
    const [properties, ref] = useDrop(() => ({
        accept: "CARD",
        drop: (item) => {
            // Logic to be executed after the item is dropped
            if (item.typeOfList !== typeOfList) {
                ctx.dispatch({
                    type: "MOVE_ITEM",
                    payload: {
                        fromList: item.typeOfList,
                        toList: typeOfList,
                        index: item.index
                    }
                })
            }
        }
    }));
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
        textBoxRef.current.value = "";
        setAddCardFormVisible(false);
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
        <div ref={ref} className={styles.container}>
            <h2>{heading}</h2>
            {
                ctx.state[typeOfList].map((taskTitle, index) => <Card key={`${taskTitle}_${index}`} typeOfList={typeOfList} index={index} title={taskTitle} />)
            }
            {renderCreateCard()}

        </div>
    );
};

export default CardsList;