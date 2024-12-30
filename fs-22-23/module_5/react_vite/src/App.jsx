import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AboutUs from "./components/30-12-2024/AboutUs";
import ContactUs from "./components/30-12-2024/ContactUs";
import Home from "./components/30-12-2024/Home";
import NavBar from "./components/30-12-2024/NavBar";
import Layout from "./components/30-12-2024/Layout";

const App = () => {

  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about-us",
          element: <AboutUs />
        },
      ]
    },
    {
      path: "/contact-us",
      element: <ContactUs />
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
