import { createBrowserRouter, RouterProvider } from "react-router";

import './App.css'
import PreLoginLayout from "./container/Layout/PreLoginLayout";
import Login from "./container/Login/Login";
import Register from "./container/Register/Register";

function App() {
  const router = createBrowserRouter([
    {
      element: <PreLoginLayout />,
      children: [
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/register",
          element: <Register />
        }
      ]
    }
  ])
  return (
    <>
      <h1>Welcome to my ecomm store</h1>
      <RouterProvider router={router} />
    </>
  )
}

export default App
