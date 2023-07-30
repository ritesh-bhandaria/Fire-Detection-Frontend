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
    await fetch('http://localhost:5000/api/logout/',{
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
      const response = await fetch("http://localhost:5000/api/user/", {
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

      const content = await response.json();

      setName(content.name);
    })();

    const alert_url = "http://localhost:5000/crud/all/?creator="+name;

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
    fetch('http://localhost:5000/crud/item/'+id+'/delete/', {
      method: 'DELETE'
    }).then((result)=>{
      result.json().then((resp)=>{
        console.warn(resp)
      })
    })
  }


  return (
    <Fragment>
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
      {showEditModal && <EditForm closeEditModal={setShowEditModal} />}
      {showNewModal && <NewForm closeNewModal={setShowNewModal} creator={name} />}
    </Fragment>
  );
};

export default Home;
