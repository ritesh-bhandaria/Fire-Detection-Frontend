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
            <p>
            Welcome to our cutting-edge Forest Fire Detection Website, where the power of deep learning meets environmental protection and safety. Our platform harnesses the latest advancements in artificial intelligence to provide you with real-time alerts and invaluable insights into the status of forests, helping you stay informed and take proactive measures against the threat of wildfires.

🔥 *Empowering Early Detection*: Our website utilizes state-of-the-art deep learning algorithms to continuously monitor vast expanses of forested areas. Through advanced image recognition and analysis, we detect even the smallest hints of fire, enabling swift response and minimizing potential damage.

🌲 *Preserving Nature's Beauty*: We understand the intrinsic value of forests in our ecosystem. Our technology is dedicated to preserving the natural beauty of these environments by swiftly identifying and containing fire outbreaks. By providing early warnings, we contribute to reducing the impact on wildlife, vegetation, and air quality.

🌐 *Real-time Monitoring*: Stay connected to the heart of the forest with our real-time monitoring system. Our website updates its data feed frequently, delivering live images, weather conditions, and fire risk assessments. This information empowers you to make informed decisions and respond effectively to changing situations.

📈 *Data-driven Insights*: Dive into detailed analytics and historical data to understand fire patterns, trends, and risk factors. Our website compiles comprehensive reports and visualizations, empowering you with actionable insights to collaborate with local authorities, community members, and researchers in the battle against wildfires.

⚙ *User-friendly Interface*: Navigating our website is a breeze. With a user-friendly interface designed for accessibility, you can effortlessly explore maps, charts, and live streams. Whether you're a forestry professional, concerned citizen, or researcher, our platform caters to your unique needs.

📢 *Instant Alerts*: Your safety is our priority. Receive instant alerts through email, SMS, or push notifications as soon as a potential fire is detected. With timely notifications, you can take appropriate measures to safeguard lives, property, and the environment.

🌍 *Global Coverage*: Our commitment to a safer world extends beyond borders. We provide coverage for forested regions around the globe, uniting communities in the fight against wildfires and fostering a sense of shared responsibility for our planet.

Join us in embracing technology for a greener, safer future. Explore the unmatched capabilities of our deep learning-powered Forest Fire Detection Website and become an integral part of the solution. Together, we can stand against the threat of wildfires and protect the world's most precious ecosystems.
            </p>
          </div>
      </div>

      <div className="dark:text-white p-10">
        <div className="text-2xl font-semibold col-start-1 mb-4">About this project</div>
        <p></p>
      </div>
      </div>
    </Fragment>
  )
}

export default Landing