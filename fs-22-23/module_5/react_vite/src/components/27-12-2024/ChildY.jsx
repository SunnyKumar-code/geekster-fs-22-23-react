import { memo } from "react";
import ChildZ from "./ChildZ";

const ChildY = () => {
    console.log("Child Y rendered");
    return (
        <>
            <h4>Child Y</h4>
            <ChildZ />
        </>
    )
};

export default memo(ChildY);