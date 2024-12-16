import { useState } from "react";

const Counter = () => {

    // let counter = 0;
    // Syntax let [variableName, setVariableName] = useState(initialValueOfVariable);
    let [counter, setCounter] = useState(0);

    const onBtnClick = () => {
        // counter++; // counter = newValue // Vanilla JS Variable updation
        // setVariableName(newValueOfVariable);
        let newCounterValue = counter + 1;
        setCounter(newCounterValue); // Asynchrounous
        console.log("Btn clicked", counter);
    };

    const onDecrease = () => {
        let newValue = counter - 1;
        setCounter(newValue);
    };


    return (
        <div>
            <button onClick={onDecrease}>Decrease</button>
            Counter : {counter}
            <button onClick={onBtnClick}>Increase</button>

            <h1>{counter}</h1>
            <p>{counter}</p>
            {/* <button onClick={() => {
                console.log("Anonymous fn called")
            }}>Click Here</button> */}
        </div>
    )
};

export default Counter;