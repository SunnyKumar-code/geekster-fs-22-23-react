import { Outlet } from "react-router";

const PostLoginLayout = () => {
    return (
        <>
            <div>
                Header (Post Login)
            </div>
            <Outlet />
            <div>
                Footer
            </div>
        </>
    )
};

export default PostLoginLayout