import React, { Fragment, useState } from 'react';
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import useLogout from '../hooks/useLogout';

const Navbar = () => {
  const { logoutCall } = useLogout();
  const [showLogin, setShowLogin] = useState(true);
  return (
    <Fragment>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 z-50 sticky top-0 left-0 w-full">
        <div className="flex flex-wrap justify-between items-center mx-10 p-2">
          <Link to="/">
            <span href="#" className="flex items-center">
              <img
                src="/tree_15042015_6.svg"
                className="h-10 mr-3"
                alt="Flowbite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                PR-301
              </span>
            </span>
          </Link>
          <div className="flex items-center">
            <Link to="/login">
              <span
                href="#"
                className="text-sm  text-blue-600 dark:text-blue-500 hover:underline"
              >
                Login
              </span>
            </Link>
            <p className="text-sm  text-blue-600 dark:text-blue-500 m-2"> | </p>
            <Link to="/signup">
              <span
                href="#"
                className="text-sm  text-blue-600 dark:text-blue-500 hover:underline"
              >
                Signup
              </span>
            </Link>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
