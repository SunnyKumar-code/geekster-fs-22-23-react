import { useState } from "react";
import ToDoCard from "./ToDoCard";

const ArrayState = () => {
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: "Complete Assignment",
            completed: false
        },
        {
            id: 2,
            title: "Host the application",
            completed: false
        },
        {
            id: 3,
            title: "Attend classes",
            completed: false
        }
    ]);
    console.log(todos);

    const onCompleted = (id) => {
        console.log("Completed", id);

        /**
         * 1. Find the index of item to be updated
         * 2. Splice the item using index and update it
         */

        const indexToUpdate = todos.findIndex((todo) => todo.id === id);
        console.log(indexToUpdate);

        const newObject = {
            ...todos[indexToUpdate],
            completed: true
        }
        console.log(newObject);
        const todosCopy = [...todos];
        todosCopy.splice(indexToUpdate, 1, newObject);

        setTodos(todosCopy);

        // const newArr = [];
        // for (let i = 0; i < todos.length; i++) {
        //     if (indexToUpdate === i) {
        //         newArr.push({
        //             id: todos[i].id,
        //             title: todos[i].title,
        //             completed: true
        //         })
        //     } else {
        //         newArr.push({
        //             id: todos[i].id,
        //             title: todos[i].title,
        //             completed: todos[i].completed
        //         })
        //     }
        // }
        // setTodos(newArr);


    };

    return (
        <div>
            <h2>Array with useState </h2>
            {
                todos.map((todo, index) => <ToDoCard key={todo.id} onCompleted={onCompleted} {...todo} />)
            }
        </div>
    )
};

export default ArrayState;