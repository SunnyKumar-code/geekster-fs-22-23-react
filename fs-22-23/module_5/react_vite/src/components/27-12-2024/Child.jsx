import { memo } from "react";

const Child = (props) => {
    console.log("Child rendered");
    return (
        <div style={{ border: "2px solid black" }}>
            <h3>Child Component</h3>
            <button onClick={props.onRandomNoChange}>Change Random From Child</button>
            Random No From Child = {props.randomNo}
        </div>
    )
};

const renderDecider = (prevProps, nextPros) => {
    // return boolean
    if (prevProps.randomNo == "123" && nextPros.randomNo == "456") {
        return true; // render , cross verify the boolen value
    } else {
        return false; // don't render
    }
};

// export default memo(Child,renderDecider);
export default memo(Child);