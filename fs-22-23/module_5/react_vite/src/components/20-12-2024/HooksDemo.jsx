import { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

const HooksDemo = () => {

    const [isVisible, setIsVisible] = useState(true);

    const onToggle = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div>
            <h2>useEffect</h2>

            <button onClick={onToggle}>Toggle</button>
            {
                isVisible ? <Child1 /> : <Child2 />
            }
        </div>
    );
};

export default HooksDemo;