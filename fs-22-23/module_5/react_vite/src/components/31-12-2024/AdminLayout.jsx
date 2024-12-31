import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const AdminLayout = () => {
    return (
        <div style={{
            display: "flex"
        }}>
            <Sidebar />
            <Outlet />
        </div>
    )
};

export default AdminLayout;