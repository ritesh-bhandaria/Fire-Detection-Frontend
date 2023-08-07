import React, { Fragment, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutSuccess } from "../redux/userRedux/userAcion";

const Navbar = () => {
  const user = useSelector(state=>state.user.user)
  const [showLogin, setShowLogin] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const logout = async () => {
    localStorage.getItem("user") && localStorage.removeItem("user");
    dispatch(logoutSuccess());
    navigate("/");
  };

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
            {user ? (
              <button
                type="button"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline float-right"
                onClick={logout}
              >
                Logout
              </button>
            ) : (
              <Link to="/login">
                <span
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline float-right"
                >
                  Login
                </span>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
