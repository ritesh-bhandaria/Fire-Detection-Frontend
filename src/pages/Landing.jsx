import React, { Fragment } from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Link } from "react-router-dom"

import Cookies from 'js-cookie'


const Landing = () => {
  return (
    <Fragment>
      <div className="mb-auto">
      <div className="">
        <div className="bg-white dark:bg-gray-900 opacity-80  dark:text-white p-10 m-5 rounded-lg">
        <div className="text-3xl font-semibold col-start-1 mb-4">Forest fires detection using deep learning</div>
        <div className="grid grid-cols-2">
          <div className='my-auto'>
            <div className=''>Welcome to our cutting-edge Forest Fire Detection Website, where the power of deep learning meets environmental protection and safety. Our platform harnesses the latest advancements in artificial intelligence to provide you with real-time alerts and invaluable insights into the status of forests, helping you stay informed and take proactive measures against the threat of wildfires.</div>
          </div>
          <div className="intro_image m-5">
          <div class="relative overflow-hidden md:h-[40vh] bg-[url('https://img.lemde.fr/2023/07/14/101/0/2420/1613/1440/960/60/0/4207439_5776098-01-06.jpg')] bg-contain bg-no-repeat">
          </div>
          </div>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-900 opacity-80  dark:text-white p-10 m-5 rounded-lg">
        <div className="text-3xl font-semibold mb-10">What we do ?</div>
        

        <ol class="items-center sm:flex">
    <li class="relative mb-6 sm:mb-0">
        <div class="flex items-center">
            <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                </svg>
            </div>
            <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div class="mt-3 sm:pr-8">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Empowering Early Detection</h3>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">Our website utilizes state-of-the-art deep learning algorithms to continuously monitor vast expanses of forested areas. Through advanced image recognition and analysis, we detect even the smallest hints of fire, enabling swift response and minimizing potential damage.</p>
        </div>
    </li>
    <li class="relative mb-6 sm:mb-0">
        <div class="flex items-center">
            <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                </svg>
            </div>
            <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div class="mt-3 sm:pr-8">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white"> Preserving Nature's Beauty</h3>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">We understand the intrinsic value of forests in our ecosystem. Our technology is dedicated to preserving the natural beauty of these environments by swiftly identifying and containing fire outbreaks. By providing early warnings, we contribute to reducing the impact on wildlife, vegetation, and air quality.</p>
        </div>
    </li>
    <li class="relative mb-6 sm:mb-0">
        <div class="flex items-center">
            <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                </svg>
            </div>
            <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div class="mt-3 sm:pr-8">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">User-friendly Interface</h3>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">Navigating our website is a breeze. With a user-friendly interface designed for accessibility, you can effortlessly explore maps, charts, and live streams. Whether you're a forestry professional, concerned citizen, or researcher, our platform caters to your unique needs.</p>
        </div>
    </li>
</ol>


        <ol class="items-center sm:flex mt-10">
    <li class="relative mb-6 sm:mb-0">
        <div class="flex items-center">
            <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                </svg>
            </div>
            <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div class="mt-3 sm:pr-8">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Instant Alerts</h3>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">Your safety is our priority. Receive instant alerts through email as soon as a potential fire is detected. With timely notifications, you can take appropriate measures to safeguard lives, property, and the environment.</p>
        </div>
    </li>
    <li class="relative mb-6 sm:mb-0">
        <div class="flex items-center">
            <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                </svg>
            </div>
            <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div class="mt-3 sm:pr-8">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Global Coverage</h3>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">Our commitment to a safer world extends beyond borders. We provide coverage for forested regions around the globe, uniting communities in the fight against wildfires and fostering a sense of shared responsibility for our planet.</p>
        </div>
    </li>
    <li class="relative mb-6 sm:mb-0">
        <div class="flex items-center">
            <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                </svg>
            </div>
            <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div class="mt-3 sm:pr-8">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Our reliable classification model</h3>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">We developed a classification model using our custom satellite images to detect forest fires, leveraging 23,644 images of both smoke and non-smoke instances captured under varying conditions, including normal and foggy environments. Our aim is to achieve optimal performance when applied to MODIS images obtained via the GIBS API.</p>
        </div>
    </li>
</ol>

<div class="mb-10 mt-10">
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">Join us in embracing technology for a greener, safer future. Explore the unmatched capabilities of our deep learning-powered Forest Fire Detection Website and become an integral part of the solution. Together, we can stand against the threat of wildfires and protect the world's most precious ecosystems.
        </p>

        <a href="https://github.com/ritesh-bhandaria/Fire-Detection-Frontend"><button className=" mt-10 focus:outline-none text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 mb-8">Github repostitory</button></a>
    </div>

      </div>
      
      </div>
    </Fragment>
  )
}

export default Landing