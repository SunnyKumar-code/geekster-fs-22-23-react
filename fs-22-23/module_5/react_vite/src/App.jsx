import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AdvHook from "./components/02-01-2025/AdvHook";

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AdvHook />
    }
  ]);

  return (
    <div>
      {/* <NavBar /> */}
      <RouterProvider router={router} />
    </div>
  )
}

export default App
