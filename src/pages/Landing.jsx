import React, { Fragment } from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Link } from "react-router-dom"

import Cookies from 'js-cookie'


const Landing = () => {
  return (
    <Fragment>
      <div className="mb-auto">
      <div className=" dark:text-white p-10 grid grid-cols-2 grid-rows-1 ">
        <div className="col-start-1">
          <div className="text-3xl font-semibold col-start-1 mb-4">Forest fires detection using deep learning</div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas adipisci voluptatum, maxime exercitationem error nisi qui, distinctio numquam ipsam ipsum asperiores repellendus. Dolorem, voluptatum. Accusamus perspiciatis maxime ullam illo quaerat?</p>
          </div>
      </div>

      <div className="dark:text-white p-10">
        <div className="text-2xl font-semibold col-start-1 mb-4">About this project</div>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos id ex cumque, omnis similique, quia eaque repudiandae consectetur minus officia dolores? Distinctio fuga autem vitae voluptatibus, molestiae unde eligendi illum!</p>
      </div>
      </div>
    </Fragment>
  )
}

export default Landing