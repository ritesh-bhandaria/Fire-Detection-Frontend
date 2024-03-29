import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios';
import NewAlert from '../pages/NewAlert';
import { useSelector } from 'react-redux'


const NewForm = ({ closeNewModal, creator}) => {

  const userdata = useSelector(state => state.user)
  const [user, setUser] = useState({});

  useEffect(()=>{
    if(userdata)
    {
      setUser(userdata.user)
    }
  },[userdata])

  const [newEntry, setNewEntry] = useState({
    alertName : "",
    latitude_top : "",
    longitude_top : "",
    latitude_bot : "",
    longitude_bot : "",
    frequency:""
  });

  const handleInput = (e) =>{
    const name = e.target.name
    const value= e.target.value
    // console.log(name,value)

    setNewEntry({...newEntry, [name] : value})
  }

  useEffect(()=>{
    setNewEntry({...newEntry, creator:user._id})
  },[user])

  const handleSubmit = async(e) =>{
    e.preventDefault(); 
    // console.log(newEntry)
    console.log(newEntry);
    try{
      const res = await axios.post('http://localhost:5000/api/alert/create', newEntry)
      console.log(res.data);
      window.location.reload()
    }catch(err)
    {
      console.log(err);
    }
  }

  return (
    <Fragment>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative 2xl:mt-0 mt-36 2xl:mb-0 md:mt-36 mb-8 mx-auto 2xl:w-[600px] md:w-[600px] w-[300px]">
          <div className="border-0 relative flex flex-col w-full bg-white rounded-lg shadow dark:bg-gray-800 dark: text-white">
            <div className="relative p-10  flex items-center justify-center flex-col">
              {/* <button
                className="text-3xl font-semibold col-start-1 mb-4"
                onClick={() => {
                  closeEditModal(false);
                }}
              >
                X
              </button> */}
              <div className="text-3xl font-semibold col-start-1 mb-4">
                Create a new alert.
              </div>

              <form onSubmit={handleSubmit}>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    name="alertName"
                    id="alertName"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    value={newEntry.alertName} onChange={handleInput}
                    required
                  />
                  <label
                    htmlFor="alertName"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Alert name
                  </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <label htmlFor="frequency" className="sr-only">
                    Alert Frequency
                  </label>
                  <select
                    id="frequency"
                    className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                    name="frequency"
                    value={newEntry.frequency} onChange={handleInput}
                  >
                    <option value="" disabled>Choose a Frequency</option>
                    <option value="d">Daily</option>
                    <option value="w">Weekly</option>
                    <option value="m">Monthly</option>
                  </select>
                </div>

                <div className="font-medium text-sm text-gray-500 dark:text-gray-400 mb-2 mt-2">Please enter location details</div>

                <div className="grid md:grid-cols-2 md:gap-6 mt-3">
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="text"
                      name="latitude_top"
                      id="latitude_top"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      value={newEntry.latitude_top} onChange={handleInput}
                      required
                    />

                    <label
                      htmlFor="latitude_top"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Latitude_top
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="text"
                      name="longitude_top"
                      id="longitude_top"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      value={newEntry.longitude_top} onChange={handleInput}
                      required
                    />
                    <label
                      htmlFor="longitude_top"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Longitude_top
                    </label>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 md:gap-6 mt-3">
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="text"
                      name="latitude_bot"
                      id="latitude_bot"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      value={newEntry.latitude_bot} onChange={handleInput}
                      required
                    />

                    <label
                      htmlFor="latitude_bot"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Latitude_bottom
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="text"
                      name="longitude_bot"
                      id="longitude_bot"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=""
                      value={newEntry.longitude_bot} onChange={handleInput}
                      required
                    />
                    <label
                      htmlFor="longitude_bot"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Longitude_bottom
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="focus:outline-none text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 mb-8"
                >
                  Create
                </button>
                <button
                  type="submit"
                  className="focus:outline-none text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 mb-8"
                  onClick={() => {
                    closeNewModal(false);
                  }}
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default NewForm