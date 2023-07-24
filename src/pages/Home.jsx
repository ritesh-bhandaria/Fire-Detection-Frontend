import React, { Fragment, useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom"
import EditForm from "../components/EditForm";
import NewForm from "../components/NewForm";

const Home = () => {
  const [name, setName] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showNewModal, setShowNewModal] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [alerts, setAlerts] = useState([]);
  
  

  const logout= async() =>{
    await fetch('http://localhost:8000/api/logout/',{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      credentials: 'include',
     })

     setRedirect(true);
  }

  // if(redirect){
  //   return <Navigate to="/login"/>
  // }
     

  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:8000/api/user/", {
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

      const content = await response.json();

      setName(content.name);
    })();

    const alert_url = "http://localhost:8000/crud/all/?creator="+name;

    (async () => {
      const response = await fetch(alert_url, {
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

      const alertList = await response.json();
      // console.log(alertList)
      if(alertList.length > 0){
        setAlerts(alertList);
      }
    })();

  });

  
  // console.log(alert_url);

  // useEffect(() => {
  //   (async () => {
  //     const response = await fetch(alert_url, {
  //       headers: { "Content-Type": "application/json" },
  //       credentials: "include",
  //     });

  //     const alertList = await response.json();
  //     // console.log(alertList)
  //     if(alertList.length > 0){
  //       setAlerts(alertList);
  //     }
  //     toggler=true;
  //   })();
  // });

  function deleteAlert({id}){
    // console.log(id)
    fetch('http://localhost:8000/crud/item/'+id+'/delete/', {
      method: 'DELETE'
    }).then((result)=>{
      result.json().then((resp)=>{
        console.warn(resp)
      })
    })
  }


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
      <div>
        <div className="bg-white dark:bg-gray-900 opacity-80   dark:text-white p-10 m-5 rounded-lg">
          <div className="mb-8"><span class="text-3xl font-semibold mb-8">
            {name ? "Fire alerts for " + name : "you are not logged in"}
          </span>
          <button type="button" class="font-medium text-blue-600 dark:text-blue-500 hover:underline float-right" onClick={logout}>Logout</button></div>
          
          <div>
            <button
              type="button"
              class="focus:outline-none text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 mb-8"
              onClick={() => {
                setShowNewModal(true);
              }}
            >
              {/* <Link to="/newAlert">Create a new alert</Link> */}
              Create a new alert
            </button>

            <div class="relative overflow-x-auto shadow-md shadow-red-400 border-2 border-red-400 sm:rounded-lg">

              <table class="w-full text-sm text-left text-gray-600 dark:text-gray-500">
                <thead class="text-xs text-gray-800 uppercase bg-gray-100 dark:bg-gray-800 dark:text-gray-500">
                  <tr>
                    <th scope="col" class="px-6 py-3">
                      Alert id
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Name
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Frequency
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Area of Interest
                    </th>
                    <th scope="col" class="px-6 py-3">
                      <span class="">Edit</span>
                    </th>
                    <th scope="col" class="px-6 py-3">
                      <span class="">Delete</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                {
                  alerts.map((currAlert)=>{
                    const {id, alert_name, latitude, longitude, category, creator} = currAlert;

                    return(
                      <>
                      <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {id}
                    </th>
                    <td class="px-6 py-4">{alert_name}</td>
                    <td class="px-6 py-4">
                        {category}
                    </td>
                    <td class="px-6 py-4">
                      <ul>
                        <li>Latitude: {latitude}</li>
                        <li>Longitude: {longitude}</li>
                      </ul>
                    </td>
                    <td class="px-6 py-4 ">
                     
                      <button
                        className="editform font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        onClick={() => {
                          setShowEditModal(true);
                        }}
                      >
                        Edit
                      </button>
                    </td>
                    <td class="px-6 py-4">
                      
                      <button
                        class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        // onClick={() => setShowModal(true)}
                        onClick={()=> deleteAlert({id})}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                      </>
                    )
                  })
                }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {showModal ? (
        <>
          {/* <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative 2xl:mt-0 mt-36 2xl:mb-0 md:mt-36 mb-8 mx-auto 2xl:w-[600px] md:w-[600px] w-[300px]">
              <div className="border-0 relative flex flex-col w-full bg-white rounded-lg shadow dark:bg-gray-800">
                <div className="relative p-10  flex items-center justify-center flex-col">
                  <form>
                    <svg
                      aria-hidden="true"
                      class="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                      Are you sure you want to delete this alert?
                    </h3>
                    <div className="flex items-center justify-center mt-8">
                      <button
                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 m-3"
                        type="submit"
                      >
                        Yes, I'm sure
                      </button>
                      <button
                        className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 m-3"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        No, cancel
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div> */}
        </>
      ) : null}
      {showEditModal && <EditForm closeEditModal={setShowEditModal} />}
      {showNewModal && <NewForm closeNewModal={setShowNewModal} creator={name} />}
    </Fragment>
  );
};

export default Home;
