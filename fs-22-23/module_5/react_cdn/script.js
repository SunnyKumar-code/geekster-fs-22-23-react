// Vanilla JS
// const h1Js = document.createElement("h1");
// const rootDiv = document.getElementById("root");
// h1Js.innerText = "Welcome to Vanilla JS";
// rootDiv.append(h1Js);


// React JS
// const h1React = React.createElement("h1", {}, "Welcome to ReactJS");

// const pReact = React.createElement("p", { className: "my-paragraph" }, "Lorem ipsum dor sit amet Lorem ipsum dor sit ametLorem ipsum dor sit amet")

// const div = React.createElement("div", {}, pReact);

// const rootDiv = document.getElementById("root");
// // Register a reactjs root / tree
// const reactRoot = ReactDOM.createRoot(rootDiv);
// reactRoot.render(div);

// JSX

// ReactJS Component -> When a function returns HTML we call it as React component
const MyReactApp = () => {
    const userName = "Peter";
    const price = 59999;
    // const address = "456, Rowm St"
    const address = {
        addressLine1: "456",
        addressLine2: "Rowen St",
        city: "NY",
        zipCode: "123456"
    }
    const users = [{ name: "A" }, { name: "B" }, { name: "C" }]
    return (
        <div>
            <h2>Welcome {userName}</h2>
            <h4>Price {price - 25000}</h4>
            Users : {
                users.map((user, index) => {
                    return <h5 key={index}>Name : {user.name}</h5>
                })
            }
            {/* <p>
                Address: {address.addressLine1} <br />
                {address.addressLine2} <br />
                {address.city} <br />
                {address.zipCode}
            </p> */}
            <p style={{ color: "blue", fontSize: "30px" }}>Lorem ipsum dor sit amet</p>
            <p>THis is another paragraph created using reactjs jsx</p>
        </div>
    )
};

const rootDiv = document.getElementById('root');
const reactRoot = ReactDOM.createRoot(rootDiv);
reactRoot.render(<MyReactApp></MyReactApp>);