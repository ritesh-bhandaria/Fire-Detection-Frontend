import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
// Link
import axios from 'axios';

export default function Alert() {
    const { alertId } = useParams();
    console.log(alertId)
    const [firePoints, setFirePoints] = useState({})
    const [alertName, setAlertName] = useState("")

    useEffect(() => {
        const fetchResults = async () => {
            console.log(alertId)
            try {
                const response = await axios.get('http://localhost:5000/api/fireAlert/' + alertId);
                setFirePoints(response.data)
                console.log(response.data);
            } catch (err) {
                console.log(err);
            }
        }
        fetchResults();
    }, [])

    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const response = await axios.get('http://localhost:5000/api/alert/id/'+alertId)
                setAlertName(response.data.alertName)
                console.log(response.data);
            }catch(err)
            {
                console.log(err);
            }
        }
        fetchData();
    },[])

    // console.log("firePoints - ", firePoints)
    return (
        <div>
            <h1 className="header">Alert</h1>
            {
                firePoints && (
                    <div className="px-6 bg-white border-b dark:bg-gray-900 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700">
                        <td className="px-6 py-4">
                        
                                {alertName}
                           
                        </td>
                        <td className="px-6 py-4">
                            Frequency
                        </td>
                        <td className="px-6 py-4">
                            <ul>
                                <li>Points: {firePoints.lat_top} ,{firePoints.long_top}</li>
                                <li>(X,Y): {firePoints.x_axis}, {firePoints.y_axis}</li>
                            </ul>
                        </td>

                        <td>
                            <Link to={`https://gibs.earthdata.nasa.gov/wmts/epsg4326/best/MODIS_Terra_CorrectedReflectance_TrueColor/default/${firePoints.date}/250m/8/${firePoints.x_axis}/${firePoints.y_axis}.jpg`}>

                                Image Link
                            </Link>
                        </td>
                    </div>
                )
            }
        </div>
    )
}
