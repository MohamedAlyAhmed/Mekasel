import MainLayout from "@layouts/MainLayout/MainLayout";
import AboutUs from "@pages/AboutUs";
import Cart from "@pages/Cart";
import Categories from "@pages/Categories";
import ContactUs from "@pages/ContactUs";
import Error from "@pages/Error/Error";
import Home from "@pages/Home";
import Login from "@pages/Login";
import Products from "@pages/Products";
import Register from "@pages/Register";
import Wishlist from "@pages/Wishlist";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { appPaths } from '@routes/paths';

const router = createBrowserRouter([
  {
    path: appPaths.home,
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: appPaths.login,
        element: <Login />,
      },
      {
        path: appPaths.register,
        element: <Register />,
      },
      {
        path: appPaths.categories,
        element: <Categories />,
      },
      {
        path: appPaths.products,
        element: <Products />,
      },
      {
        path: appPaths.aboutUS,
        element: <AboutUs />,
      },
      {
        path: appPaths.contactUs,
        element: <ContactUs />,
      },
      {
        path: appPaths.cart,
        element: <Cart />,
      },
      {
        path: appPaths.wishlist,
        element: <Wishlist />,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
