import { useState, memo, useMemo, useCallback } from "react";
import Child from "./Child";
import ChildY from "./ChildY";

const Parent = () => {
    console.log("Parent Rendered");
    const [random, setRandom] = useState(0);
    const [counter, setCounter] = useState(0);

    const [arr, setArr] = useState([]);
    // const arr = useMemo(() => {
    //     return [];
    // }, []);

    // const onBtnClick = () => {
    //     setRandom(Math.random());
    // };

    const onBtnClick = useCallback(() => {
        setRandom(Math.random());
    }, []);

    const onAddItemToArray = () => {
        const copy = [...arr];
        copy.push(Math.random());
        setArr(copy);
    };

    return (
        <div style={{ border: "2px solid red" }}>
            <h2>Memo & useCallback</h2>
            {/* <button onClick={onBtnClick}>Random Change</button> */}
            {/* Random Number = {random} */}


            Counter = {counter}

            <button onClick={() => setCounter(counter + 1)}>Counter Change</button>

            <button onClick={onAddItemToArray}>Array Change</button>

            <Child onRandomNoChange={onBtnClick} randomNo={random} />
            {/* <Child randomNo={random} arr={arr} /> */}
            {/* <ChildY /> */}
        </div>
    )
};

export default memo(Parent);