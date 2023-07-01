import React, { Fragment } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Fragment>
      <div className="bg-white dark:bg-gray-900 opacity-80  dark:text-white p-10 m-5 rounded-lg">
        <div className="text-3xl font-semibold mb-8">Fire alerts for Username.</div>
        <div>

          <button
            type="button"
            className="focus:outline-none text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 mb-8"
          >
            <Link to="/newAlert">
              Create a new alert
            </Link>
          </button>

          <div className="relative overflow-x-auto shadow-md shadow-red-400 border-2 border-red-400 sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-600 dark:text-gray-500">
              <thead className="text-xs text-gray-800 uppercase bg-gray-100 dark:bg-gray-800 dark:text-gray-500">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Alert id
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Area of Interest
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <span className="">Edit</span>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <span className="">Delete</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    1234
                  </th>
                  <td className="px-6 py-4">Sample</td>
                  <td className="px-6 py-4">
                    <label className="relative inline-flex items-center mb-5 cursor-pointer">
                      <input type="checkbox" value="" className="sr-only peer" />
                      <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Active</span>
                    </label>

                  </td>
                  <td className="px-6 py-4">
                    <ul>
                      <li>Latitude: xxx</li>
                      <li>Longitude: xxx</li>
                    </ul>
                  </td>
                  <td className="px-6 py-4 ">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                  </td>
                  <td className="px-6 py-4">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Delete
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
