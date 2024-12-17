import { useState } from "react";

const UserInfo = () => {
    let [state, setState] = useState({
        name: "John",
        dob: "01/01/2000",
        mobile: "9898989898",
        address: "123, ABC Street"
    });

    const onBtnClick = () => {
        setState({
            ...state,
            name: "Alex"
        });
    };

    return (
        <div>
            States Demo
            Name : {state.name} <br />
            DOB: {state.dob} <br />
            Mobile : {state.mobile} <br />
            Address: {state.address} <br />

            <button onClick={onBtnClick}>Update Name</button>
        </div>
    )
};

export default UserInfo;