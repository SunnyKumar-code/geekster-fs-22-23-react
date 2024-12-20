import { useState, useEffect } from "react";

const Child2 = () => {

    const [counter, setCounter] = useState(0);

    const onCounterClick = () => {
        setCounter(counter + 1);
    };
    console.log("Child 2 rendered")

    // useEffect(() => {
    //     // Mounting phase -> The code you'll write here will run only once when the component is mounted/loaded for the first time
    //     fetch("https://jsonplaceholder.typicode.com/todos")
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    // }, []);


    // useEffect(() => {
    //     // Mounting phase & Updating phase -> The code you'll write here will run on component mounting & every time the component re-renders
    //     fetch("https://jsonplaceholder.typicode.com/todos")
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    // });

    useEffect(() => {
        // Unmounting phase -> The code you'll write here will run only once when the component is unmounted/removed from the react tree

        // console.log("Hello");
        return () => {
            fetch("https://jsonplaceholder.typicode.com/todos")
                .then(res => res.json())
                .then(data => console.log(data))
        }

    }, []);



    return (
        <>
            <h1>Child 2 Component</h1>
            <h2>Counter {counter}</h2>
            <button onClick={onCounterClick}>Counter</button>
        </>
    )
};

export default Child2;