import React, { Fragment, useState } from 'react';
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import useLogout from '../hooks/useLogout';

const Navbar = () => {
  const {logoutCall} = useLogout();
  const [showLogin, setShowLogin] = useState(true);
  return (
    <Fragment>
        <nav className="bg-white border-gray-200 dark:bg-gray-900 sticky top-0 left-0 w-full">
    <div className="flex flex-wrap justify-between items-center mx-10 p-2">
        <Link to="/" className="flex items-center">
          {/* <a href="#" className="flex items-center"> */}
            <img src="/tree_15042015_6.svg" className="h-10 mr-3" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">PR-301</span>
          {/* </a> */}
        </Link>
        {
          showLogin &&
          <div className="flex items-center">
            <Link to="/login" className="text-sm  text-blue-600 dark:text-blue-500 hover:underline">
            {/* <a href="#" className="text-sm  text-blue-600 dark:text-blue-500 hover:underline"> */}
              Login
            {/* </a> */}
            </Link>
            <p className='text-sm  text-blue-600 dark:text-blue-500 m-2'> | </p>
            <Link to="/signup" className="text-sm  text-blue-600 dark:text-blue-500 hover:underline">
            {/* <a href="#" className="text-sm  text-blue-600 dark:text-blue-500 hover:underline"> */}
            Signup
            {/* </a> */}
            </Link>
          </div>
        }
        {
          !showLogin && 
          <div className="flex items-center">
            <Link className="text-sm  text-blue-600 dark:text-blue-500 hover:underline" onClick={handleLogout}>
              Logout
            </Link>
          </div>
        }
        
    </div>
</nav>

    </Fragment>
  )
}

export default Navbar