import { createContext, useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./containers/Layout/Layout";
import BlogList from "./containers/BlogList/BlogList";
import BlogCreate from "./containers/BlogCreate/BlogCreate";
import Login from "./containers/Login/Login";

import './App.css'

export const UserContext = createContext();

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },
    {
      path: "",
      element: <Layout />,
      children: [
        {
          path: "/home",
          element: <BlogList />
        },
        {
          path: "/create",
          element: <BlogCreate />
        }
      ]
    }
  ]);

  const [user, setUser] = useState({
    displayName: "",
    email: "",
    uid: ""
  });

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <RouterProvider router={router} />
      </UserContext.Provider>
    </>
  )
}

export default App
