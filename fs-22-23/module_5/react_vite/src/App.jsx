import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AboutUs from "./components/30-12-2024/AboutUs";
import ContactUs from "./components/30-12-2024/ContactUs";
import Home from "./components/30-12-2024/Home";
import NavBar from "./components/30-12-2024/NavBar";
import Layout from "./components/30-12-2024/Layout";
import AdminLayout from "./components/31-12-2024/AdminLayout";
import Orders from "./components/31-12-2024/Orders";
import Customers from "./components/31-12-2024/Customers";
import Inventory from "./components/31-12-2024/Inventory";
import HotelDetails from "./components/31-12-2024/HotelDetails";
import NotFound from "./components/31-12-2024/NotFound";

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
        {
          path: "/hotel/hotel-details/:hotelId",
          element: <HotelDetails />
        }
      ]
    },
    {
      element: <AdminLayout />,
      children: [
        {
          path: "/orders",
          element: <Orders />
        },
        {
          path: "/customers",
          element: <Customers />
        },
        {
          path: "/inventory",
          element: <Inventory />
        }
      ]
    },
    {
      path: "*",
      element: <NotFound />
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
