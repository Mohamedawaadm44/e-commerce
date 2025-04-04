import React, { useContext } from "react";
import logo from "../../assets/images/freshcart-logo.svg";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContextObject } from "../../Context/AuthContext";
import { cartContextObject } from "../../Context/CartContext";

export default function Navbar() {
  const Navigation = useNavigate();
  const { token, setToken } = useContext(AuthContextObject);
  const {numOfCartItems}=useContext(cartContextObject)

  function logOut() {
    Navigation("/Register");
    localStorage.removeItem("tkn");
    setToken(null);
  }
  return (
    <nav className="bg-gray-100 border-gray-200  dark:bg-gray-900 sticky top-0 right-0 left-0 z-10">
      <div className="max-w-screen-xl flex  items-center justify-between  p-4  md:justify-start">
        <Link
          to={"/"}
          className="flex items-center space-x-3 rtl:space-x-reverse md:w-[20%] xl:w-auto"
        >
          <img src={logo} className="h-8" alt="Flowbite Logo" />
        </Link>
        <div
          className="hidden  md:flex md:w-[80%] mx-4 md:justify-between xl:w-5/6 "
          id="navbar-default"
        >
          {token && (
            <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-3 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li className="md:flex  flex-wrap content-center">
                <NavLink
                  to={"/home"}
                  className="block py-2 px-3 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-gray-800  md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>

              <li className="md:flex  flex-wrap content-center">
                <NavLink
                  to="/products"
                  className="block py-2 px-3 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-gray-800  md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Products
                </NavLink>
              </li>
              <li className="md:flex  flex-wrap content-center">
                <NavLink
                  to="/categories"
                  className="block py-2 px-3 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-gray-800  md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Categories
                </NavLink>
              </li>
              <li className="md:flex  flex-wrap content-center">
                <NavLink
                  to="/brands"
                  className="block py-2 px-3 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-gray-800  md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Brands
                </NavLink>
              </li>
            </ul>
          )}
          <ul className="ms-auto flex flex-col p-4 md:p-0 mt-4   md:flex-row md:space-x-3 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li className="hidden md:flex  flex-wrap content-center">
              <i className="fa fa-brands fa-facebook mx-1 cursor-pointer text-gray-500  focus:outline-none hover:text-gray-800  focus:ring-gray-100  rounded-lg text-md  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"></i>
              <i className="fa fa-brands fa-twitter mx-1 cursor-pointer text-gray-500  focus:outline-none hover:text-gray-800  focus:ring-gray-100  rounded-lg text-md  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"></i>
              <i className="fa fa-brands fa-instagram mx-1 cursor-pointer text-gray-500  focus:outline-none hover:text-gray-800  focus:ring-gray-100  rounded-lg text-md  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"></i>
              <i className="fa fa-brands fa-google mx-1 cursor-pointer text-gray-500  focus:outline-none hover:text-gray-800  focus:ring-gray-100  rounded-lg text-md  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"></i>
              <i className="fa fa-brands fa-linkedin mx-1 cursor-pointer text-gray-500  focus:outline-none hover:text-gray-800  focus:ring-gray-100  rounded-lg text-md  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"></i>
              <i className="fa fa-brands fa-youtube mx-1 cursor-pointer text-gray-500  focus:outline-none hover:text-gray-800  focus:ring-gray-100  rounded-lg text-md  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"></i>
            </li>
            {!token && (
              <>
                <li className="flex  flex-wrap content-center">
                  <NavLink
                    to={"/login"}
                    className="  text-gray-500  focus:outline-none hover:text-gray-800  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                  >
                    Login
                  </NavLink>
                </li>
                <li className="flex  flex-wrap content-center">
                  <NavLink
                    to={"/Register"}
                    className=" text-gray-500  focus:outline-none hover:text-gray-800  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                  >
                    Register
                  </NavLink>
                </li>
              </>
            )}

            {token && (
              <li>
                <NavLink
                  to={"/cart"}
                  className="block py-2 px-3 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-gray-800  md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  <button
                    type="button"
                    className="relative inline-flex items-center p-2"
                  >
                    Cart <i className="fa-solid fa-cart-plus ps-1"></i>
                    <span className="sr-only">Notifications</span>
                    <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
                      {numOfCartItems }
                    </div>
                  </button>
                </NavLink>
              </li>
            )}

            {token && (
              <li
                onClick={logOut}
                className="flex  flex-wrap content-center cursor-pointer text-gray-500  focus:outline-none hover:text-gray-800  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                SignOut <i className="fa-solid fa-right-from-bracket flex  flex-wrap content-center ps-1"></i>
              </li>
            )}
          </ul>
        </div>

        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}
