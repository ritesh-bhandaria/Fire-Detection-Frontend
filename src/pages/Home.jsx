import React, { Fragment, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import EditForm from "../components/EditForm";
import NewForm from "../components/NewForm";
import { useSelector } from "react-redux";
import axios from "axios";

const Home = () => {
  const user = useSelector((state) => state.user.user);
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showNewModal, setShowNewModal] = useState(false);
  const [alerts, setAlerts] = useState([]);
  const [createrId, setCreaterId] = useState("");
  const [editAlertId, setEditAlertId] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAlerts = async () => {
      try {
        if (user) {
          const response = await axios.get(
            "http://localhost:5000/api/alert/" + user._id
          );
          setAlerts(response.data);
          console.log(response);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchAlerts();
  }, [user]);

  const deleteAlert = async (id) => {
    try {
      if (id) {
        const response = await axios.delete(
          "http://localhost:5000/api/alert/" + id
        );
        console.log(response.data);
        window.location.reload();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Fragment>
      <div>
        <div className="bg-white dark:bg-gray-900 opacity-80   dark:text-white p-10 m-5 rounded-lg">
          <div className="mb-8">
            <span className="text-3xl font-semibold mb-8">
              {user && `Welcome ${user.username}`}
            </span>
          </div>

          <div>
            <button
              type="button"
              className="focus:outline-none text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 mb-8"
              onClick={() => {
                setShowNewModal(true);
              }}
            >
              {/* <Link to="/newAlert">Create a new alert</Link> */}
              Create a new alert
            </button>

            <div className="relative overflow-x-auto shadow-md shadow-red-400 border-2 border-red-400 sm:rounded-lg">
              <table className="w-full text-sm text-left text-gray-600 dark:text-gray-500">
                <thead className="text-xs text-gray-800 uppercase bg-gray-100 dark:bg-gray-800 dark:text-gray-500">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Frequency
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
                  {alerts.length ? 
                    alerts.map((currAlert) => {
                      const { _id, alertName, latitude_top, longitude_top,latitude_bot, longitude_bot, frequency } = currAlert;
                      return (
                    
                          <tr key={_id} className="bg-white border-b dark:bg-gray-900 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700">
                      
                            <td className="px-6 py-4">
                            <Link to={`/alert/${_id}`}>
                              {alertName}
                            </Link>
                            </td>
                            <td className="px-6 py-4">
                              {frequency }
                            </td>
                            <td className="px-6 py-4">
                              <ul>
                                <li>Latitude: {latitude_top} ,{latitude_bot}</li>
                                <li>Longitude: {longitude_top}, {longitude_bot}</li>
                              </ul>
                            </td>
                            <td className="px-6 py-4 ">

                              <button
                                className="editform font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                onClick={() => {
                                  setShowEditModal(true);
                                  setEditAlertId(_id);
                                }}
                              >
                              Edit
                            </button>
                          </td>
                          <td className="px-6 py-4">
                            <button
                              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                              // onClick={() => setShowModal(true)}
                              onClick={() => deleteAlert(_id)}
                              >
                              Delete
                            </button>
                          </td>
                        </tr>
                      );
                    })
                  : <></>
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {showEditModal && (
        <EditForm closeEditModal={setShowEditModal} AlertId={editAlertId} />
      )}
      {showNewModal && (
        <NewForm closeNewModal={setShowNewModal} creator={createrId} />
      )}
    </Fragment>
  );
};

export default Home;
