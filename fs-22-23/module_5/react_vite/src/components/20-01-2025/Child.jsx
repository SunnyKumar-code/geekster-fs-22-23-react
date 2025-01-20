import React from "react";

class Child extends React.Component {
    constructor() {
        super();
    }

    render() {
        console.log(this.props)
        return (
            <>
                <h2>Child component</h2>
            </>
        )
    }
}

export default Child;