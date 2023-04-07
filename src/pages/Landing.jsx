import React, { Fragment } from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Link } from "react-router-dom"
const Landing = () => {
  return (
    <Fragment>
      <div class="mb-auto">
      <div class=" dark:text-white p-10 grid grid-cols-2 grid-rows-1 ">
        <div class="col-start-1">
          <div class="text-3xl font-semibold col-start-1 mb-4">Forest fires detection using deep learning</div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas adipisci voluptatum, maxime exercitationem error nisi qui, distinctio numquam ipsam ipsum asperiores repellendus. Dolorem, voluptatum. Accusamus perspiciatis maxime ullam illo quaerat?</p>
          </div>

          {/* <div class="col-start-2 flex justify-center items-center">
            <Link to="/login">
            <button type="button" class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-xl px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 m-8">Login</button>

            </Link>
            <Link to="/signup">
            <button type="button" class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-xl px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 m-8">Register</button>

            </Link>
          </div> */}
      </div>

      <div class="dark:text-white p-10">
        <div class="text-2xl font-semibold col-start-1 mb-4">About this project</div>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos id ex cumque, omnis similique, quia eaque repudiandae consectetur minus officia dolores? Distinctio fuga autem vitae voluptatibus, molestiae unde eligendi illum!</p>
      </div>
      </div>
      
    </Fragment>
  )
}

export default Landing