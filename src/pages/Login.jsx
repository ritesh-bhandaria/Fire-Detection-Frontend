import React, { Fragment, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from "react-router-dom"
const login = () => {

  const [userRegristation, setUserRegistration] = useState({
    email : "",
    username : ""
  });

  const handleInput = (e) =>{
    const name = e.target.name
    const value= e.target.value
    //console.log(name,value)

    setUserRegistration({...userRegristation, [name] : value})
  }

  const handleSubmit = (e) =>{
    e.preventDefault();

    const newRecord={...userRegristation, id : new Date().getTime().toString()}
    console.log(newRecord)

    setUserRegistration({email:"",username:""});
  }


  return (
    <Fragment>
            <div className="bg-cover">
            <div className="bg-white dark:bg-gray-900 opacity-80  dark:text-white p-10 m-5 rounded-lg">
              <div className="text-3xl font-semibold col-start-1 mb-4">Login.</div>
            
            <form action="" onSubmit={handleSubmit}>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>

                <div className="flex mb-6">
                  <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                    <svg aria-hidden="true" className="w-4 h-4 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                  </span>
                  <input type="email" autoComplete='off' name="email" id="email" className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 max-w-lg" placeholder="Example@gmail.com" value={userRegristation.email} onChange={handleInput} />
                </div>
                <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                  @
                  </span>
                  <input type="text" autoComplete='off' name="username" id="username" className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 max-w-lg" placeholder="elonmusk" value={userRegristation.username} onChange={handleInput} />
                </div>
                
                <div className="mt-6">
                  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
                </div>

                <p className='mt-1'>Don't have an account ?  <Link to="/signup"><span className='text-blue-600'>Signup</span></Link></p>

                </form>



            
            </div>
        </div>
    </Fragment>
  )
}

export default login