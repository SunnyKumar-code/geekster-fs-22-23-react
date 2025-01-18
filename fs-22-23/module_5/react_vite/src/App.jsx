import React from "react";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom"
// import Home from "./components/17-01-2025/Home"; // Normal loading
// import AboutUs from "./components/17-01-2025/AboutUs";
// import ContactUs from "./components/17-01-2025/ContactUs";
import Layout from "./components/17-01-2025/Layout";
import Loader from "./components/17-01-2025/Loader";
import User from "./components/18-01-2025/User";
import { Provider } from "react-redux";
import store from "./store";

const Home = React.lazy(() => import("./components/17-01-2025/Home"));
const AboutUs = React.lazy(() => import("./components/17-01-2025/AboutUs"));
const ContactUs = React.lazy(() => import("./components/17-01-2025/ContactUs"));

const App = () => {

  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <User />
        },
        {
          path: "/about-us",
          element: <AboutUs />
        },
        {
          path: "/contact-us",
          element: <ContactUs />
        }
      ]
    }
  ]);

  return (
    <div>
      <Provider store={store}>
        <React.Suspense fallback={<Loader />} >
          <RouterProvider router={router} />
        </React.Suspense>
      </Provider>
    </div>
  )
}

export default App
