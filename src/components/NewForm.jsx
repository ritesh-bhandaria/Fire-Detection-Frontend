import React, { Fragment, useState } from 'react'

const NewForm = ({ closeNewModal }) => {

  const [newEntry, setNewEntry] = useState({
    alert_name : "",
    frequency : "",
    latitude : "",
    longitude : ""
  });

  const handleInput = (e) =>{
    const name = e.target.name
    const value= e.target.value
    //console.log(name,value)

    setNewEntry({...newEntry, [name] : value})
  }

  const handleSubmit = (e) =>{
    e.preventDefault();

    const newRecord={...newEntry, id : new Date().getTime().toString()}
    console.log(newRecord)

    setNewEntry({alert_name:"",frequency:"",latitude:"",longitude:""});
  }

  return (
    <Fragment>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative 2xl:mt-0 mt-36 2xl:mb-0 md:mt-36 mb-8 mx-auto 2xl:w-[600px] md:w-[600px] w-[300px]">
          <div className="border-0 relative flex flex-col w-full bg-white rounded-lg shadow dark:bg-gray-800 dark: text-white">
            <div className="relative p-10  flex items-center justify-center flex-col">
              {/* <button
                class="text-3xl font-semibold col-start-1 mb-4"
                onClick={() => {
                  closeEditModal(false);
                }}
              >
                X
              </button> */}
              <div class="text-3xl font-semibold col-start-1 mb-4">
                Create a new alert.
              </div>

              <form onSubmit={handleSubmit}>
                <div class="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    name="alert_name"
                    id="alert_name"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    value={newEntry.alert_name} onChange={handleInput}
                    required
                  />
                  <label
                    for="alert_name"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Alert name
                  </label>
                </div>
                <div class="relative z-0 w-full mb-6 group">
                  <label for="frequency" class="sr-only">
                    Alert Frequency
                  </label>
                  <select
                    id="frequency"
                    class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                    name="frequency"
                    value={newEntry.frequency} onChange={handleInput}
                  >
                    <option selected>Choose a Frequency</option>
                    <option value="rt">Real Time</option>
                    <option value="d">Daily</option>
                    <option value="w">Weekly</option>
                    <option value="m">Monthly</option>
                  </select>
                </div>

                <div className="font-medium text-sm text-gray-500 dark:text-gray-400 mb-2 mt-2">Please enter location details</div>

                <div class="grid md:grid-cols-2 md:gap-6 mt-3">
                  <div class="relative z-0 w-full mb-6 group">
                    <input
                      type="text"
                      name="latitude"
                      id="latitude"
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      value={newEntry.latitude} onChange={handleInput}
                      required
                    />

                    <label
                      for="latitude"
                      class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Latitude
                    </label>
                  </div>
                  <div class="relative z-0 w-full mb-6 group">
                    <input
                      type="text"
                      name="longitude"
                      id="longitude"
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      value={newEntry.longitude} onChange={handleInput}
                      required
                    />
                    <label
                      for="longitude"
                      class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Longitude
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  class="focus:outline-none text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 mb-8"
                >
                  Create
                </button>
                <button
                  type="submit"
                  class="focus:outline-none text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 mb-8"
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