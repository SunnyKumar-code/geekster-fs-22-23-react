import { useEffect, useRef, useState } from "react";

import axios from "axios";

const Hooks = () => {
    console.log(" 1 Hooks component rendered");


    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState("");

    let firstName = useRef(""); // Presist the old value on re-render & on update do not trigger re-render
    let lastName = useRef("");

    const [counter, setCounter] = useState(0);
    // let oldCounter = 0;

    // Syntax: const <your-variable> = useRef(init-value);
    const inputBoxRef = useRef(null);

    useEffect(() => {
        console.log(" 2 useEffect with empty deps");
        // console.log(inputBoxRef);
        inputBoxRef.current.focus();
    }, []);

    const onCopyBtnClick = (e) => {
        e.preventDefault();
        console.log("Copy btn clicked")
        /**
         * 1. Refer the box
         * 2. Select the text
         * 3. Refer the value to be copied
         * 4. Copy the text
         */

        inputBoxRef.current.select();

        const firstName = inputBoxRef.current.value;
        navigator.clipboard.writeText(firstName);
        alert("Value copied");
    };

    const onIncreaseBtnClick = () => {
        // oldCounter = oldCounter + 1;
        // console.log(oldCounter)
        setCounter(counter + 1);
    };

    const onSubmitBtnClick = (e) => {
        e.preventDefault();
        console.log("Form submitted")
        const data = {
            firstName: firstName.current,
            lastName: lastName.current
        }
        axios.post("/xyz.com", data)
    }

    const onFirstNameChange = (e) => {
        // setFirstName(e.target.value);
        // firstName = e.target.value;
        firstName.current = e.target.value;
    }

    const onLastNameChange = (e) => {
        // setLastName(e.target.value);
        // lastName = e.target.value;
        lastName.current = e.target.value;
    }

    return (
        <>
            {console.log(" 3 Rendering HTML")}
            <h2>Hooks</h2>
            {counter}
            {/* {oldCounter} */}
            <button onClick={onIncreaseBtnClick}>Increse</button>
            <form>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input onChange={onFirstNameChange} ref={inputBoxRef} id="firstName" type="text" />
                </div>

                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input onChange={onLastNameChange} id="lastName" type="text" />
                </div>

                <button onClick={onSubmitBtnClick}>Submit</button>

                <button onClick={onCopyBtnClick}>Copy First Name</button>
            </form>
        </>
    );
};

export default Hooks;