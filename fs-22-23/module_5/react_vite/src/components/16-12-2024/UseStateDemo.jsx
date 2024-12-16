import { useState } from "react";

const UseStateDemo = () => {

    let [userName, setUserName] = useState("");
    let [color, setColor] = useState("#ffffff");
    let [num, setNum] = useState(0);

    const onInputChange = (e) => {
        console.log("On change fn called", e.target.value)
        setUserName(e.target.value);
    };

    const onColorChange = (e) => {
        console.log("On color change", e.target.value);
        setColor(e.target.value);
    };

    const onBtnClickHandler = () => {
        for (let i = 0; i < 5; i++) {
            // Tricky interview question
            // setNum(num + 1); // Async
            setNum((oldValue) => {
                return oldValue + 1;
            });
            // console.log(i);
        }
        console.log("Btn clicked");
    };


    return (
        <div style={{
            width: "100vw",
            height: "100vh",
            backgroundColor: color
        }}>
            Use State Demo component
            Num : {num}
            <br />

            <button onClick={onBtnClickHandler}>Click Me</button>
            <form>
                <div>
                    <label htmlFor={"fullName"}>Full Name</label>
                    <input onChange={onInputChange} id={"fullName"} />
                </div>

                <div>
                    <input type="color" onChange={onColorChange} />
                </div>
            </form>


            <div>
                <h2>Preview</h2>
                Name : {userName}
            </div>
        </div>
    )
};

export const MyComp = () => { };

export default UseStateDemo;