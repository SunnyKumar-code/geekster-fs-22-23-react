import { useDrag } from "react-dnd";

import styles from "./Card.module.css";
import { useContext, useEffect, useRef, useState } from "react";
import { TasksContext } from "../../App";


const Card = ({ index, title, typeOfList }) => {

    const [isEditMode, setEditMode] = useState(false);
    const textBoxRef = useRef();
    const ctx = useContext(TasksContext);

    const [properties, ref] = useDrag(() => ({
        type: "CARD",
        item: { taskTitle: title, index: index, typeOfList: typeOfList }, // data assosiated with the draggable item to bind with ui
        collect: (monitor) => {
            console.log(monitor)
            return { // Optional detail you need at the time of dragging
                opacity: monitor.isDragging() ? 0.5 : 1,
                isDragging: monitor.isDragging()
            }
        }
    }));
    console.log(properties)

    useEffect(() => {
        if (isEditMode) {
            textBoxRef.current.value = title;
        }
    }, [isEditMode]);


    const onEditItem = () => {
        setEditMode(true);
    };

    const onSave = () => {
        ctx.dispatch({
            type: "EDIT_ITEM",
            payload: {
                typeOfList,
                index,
                newValue: textBoxRef.current.value
            }
        });
        setEditMode(false);
    };

    return (
        <div ref={ref} className={styles.card}>
            {
                isEditMode ? <div>
                    <textarea ref={textBoxRef} />
                    <button onClick={onSave}>Save</button>
                    <button onClick={() => setEditMode(false)}>Cancel</button>
                </div> :
                    <div style={{ backgroundColor: properties.isDragging ? "red": "green" }}>
                        <span>{title}</span>
                        <button onClick={onEditItem}>Edit</button>
                    </div>
            }
        </div>
    );
};

export default Card;