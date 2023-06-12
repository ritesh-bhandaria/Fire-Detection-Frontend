import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Fragment>
      <nav class="bg-white border-gray-200 dark:bg-gray-900 z-50 sticky top-0 left-0 w-full">
        <div class="flex flex-wrap justify-between items-center mx-10 p-2">
          <Link to="/">
            <a href="#" class="flex items-center">
              <img
                src="/tree_15042015_6.svg"
                class="h-10 mr-3"
                alt="Flowbite Logo"
              />
              <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                PR-301
              </span>
            </a>
          </Link>
          <div class="flex items-center">
            <Link to="/login">
              <a
                href="#"
                class="text-sm  text-blue-600 dark:text-blue-500 hover:underline"
              >
                Login
              </a>
            </Link>
            <p class="text-sm  text-blue-600 dark:text-blue-500 m-2"> | </p>
            <Link to="/signup">
              <a
                href="#"
                class="text-sm  text-blue-600 dark:text-blue-500 hover:underline"
              >
                Signup
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
