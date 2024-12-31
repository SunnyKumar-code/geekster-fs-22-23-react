import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div style={{
            width: "200px",
            // position: "absolute",
            inset: 0,
            border: "2px solid black",
            height: "100vh"
        }}>
            <ul style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                listStyle: "none"
            }}>
                <li>
                    <Link to={"/orders"}>Orders</Link>
                </li>
                <li>
                    <Link to={"/customers"}>Customers</Link>
                </li>
                <li>
                    <Link to={"/inventory"}>Inventory</Link>
                </li>
            </ul>
        </div>
    )
};

export default Sidebar;