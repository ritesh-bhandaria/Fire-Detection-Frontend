import React, { Fragment } from "react";

const Footer = () => {
  return (
    <Fragment>
    <footer className="bg-white mt-auto dark:bg-gray-900 relative bottom-0 w-[100%]">
      <footer className="bg-white  dark:bg-gray-900 bottom-0 left-0">
        <div className="mx-auto  w-full p-10 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Resources
                </h2>
                <ul className="text-gray-600 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="https://flowbite.com/" className="hover:underline">
                      Flowbite
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="https://tailwindcss.com/" className="hover:underline">
                      Tailwind CSS
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="https://react.dev/" className="hover:underline">
                      React JS
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="https://nodejs.org/en" className="hover:underline">
                      Node JS
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="https://www.mongodb.com/" className="hover:underline">
                      Mongo DB
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Leran more about our project 
                </h2>
                <ul className="text-gray-600 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a
                      href="https://github.com/ritesh-bhandaria/Fire-Detection-Frontend"
                      className="hover:underline "
                    >
                      Github
                    </a>
                  </li>

                  <li className="mb-4">
                    <a
                      href="https://docs.google.com/document/d/1YX4J8Q_nE6xLZ0gOi78lyOgeVtj_oRCYBY15v50nLnU/edit?usp=sharing"
                      className="hover:underline "
                    >
                      Project report
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023{" "}
              <a href="https://github.com/ritesh-bhandaria/Fire-Detection-Frontend" className="hover:underline">
                PR 301
              </a>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
              <a
                href="https://github.com/ritesh-bhandaria/Fire-Detection-Frontend"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">GitHub account</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </footer>
    </Fragment>
  );
};

export default Footer;