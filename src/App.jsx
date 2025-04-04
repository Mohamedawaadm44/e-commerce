import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import Registeration from "./Components/Registeration/Registeration";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import Cart from "./Components/Cart/Cart";
import Products from "./Components/Products/Products";
import Brands from "./Components/Brands/Brands";
import Categories from "./Components/Categories/Categories";
import Notfound from "./Components/Notfound/Notfound";
import AuthContextProvider from "./Context/AuthContext";
import AuthProtectiveRoute from "./Components/ProtectiveRoutes/AuthProtectiveRoute";
import UnAuthProtectiveRoute from "./Components/ProtectiveRoutes/unAuthProtectiveRoute";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import CartContextProvider from "./Context/CartContext";
import { Toaster } from "react-hot-toast";
import SpecificProducts from './Components/SpecificProducts/SpecificProducts';
import CreatOrder from "./Components/CreatOrder/CreatOrder";
import Allorders from "./Components/Allorders/Allorders";


const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <UnAuthProtectiveRoute>
            <Registeration />
          </UnAuthProtectiveRoute>
        ),
      },
      {
        path: "Register",
        element: (
          <UnAuthProtectiveRoute>
            <Registeration />
          </UnAuthProtectiveRoute>
        ),
      },
      {
        path: "login",
        element: (
          <UnAuthProtectiveRoute>
            <Login />
          </UnAuthProtectiveRoute>
        ),
      },
      {
        path: "home",
        element: (
          <AuthProtectiveRoute>
            <Home />
          </AuthProtectiveRoute>
        ),
      },
      {
        path: "categories",
        element: (
          <AuthProtectiveRoute>
            <Categories />
          </AuthProtectiveRoute>
        ),
      },
      {
        path: "cart",
        element: (
          <AuthProtectiveRoute>
            <Cart />
          </AuthProtectiveRoute>
        ),
      },
      {
        path: "products",
        element: (
          <AuthProtectiveRoute>
            <Products />
          </AuthProtectiveRoute>
        ),
      },
      {
        path: "brands",
        element: (
          <AuthProtectiveRoute>
            <Brands />
          </AuthProtectiveRoute>
        ),
      },
      {
        path: "productdetails/:id",
        element: (
          <AuthProtectiveRoute>
            <ProductDetails />
          </AuthProtectiveRoute>
        ),
        
      },
      {
        path: "specificItems/:specification/:id",
        element: (
          <AuthProtectiveRoute>
            <SpecificProducts />
          </AuthProtectiveRoute>
        ),
      },
      {
        path: "creatOrder",
        element: (
          <AuthProtectiveRoute>
            <CreatOrder />
          </AuthProtectiveRoute>
        ),
      },
      {
        path:"allorders",
        element: (
          <AuthProtectiveRoute>
            <Allorders />
          </AuthProtectiveRoute>
        ),
      },
      { path: "*", element: <Notfound /> },
    ],
  },
]);

function App() {
  return (
    <AuthContextProvider>
      <CartContextProvider>
        <RouterProvider router={router} />
        <Toaster />
      </CartContextProvider>
    </AuthContextProvider>
  );
}

export default App;
