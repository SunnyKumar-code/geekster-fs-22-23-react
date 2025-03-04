import { Outlet } from "react-router";

const PreLoginLayout = () => {
    return (
        <>
            <div>
                Header (Pre Login)
            </div>
            <Outlet />
            <div>
                Footer
            </div>
        </>
    )
};

export default PreLoginLayout