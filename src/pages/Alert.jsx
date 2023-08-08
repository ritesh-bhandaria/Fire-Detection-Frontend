import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
// Link
import axios from 'axios';

export default function Alert() {
    const { alertId } = useParams();
    console.log(alertId)
    const [firePoints, setFirePoints] = useState({})
    const [alertName, setAlertName] = useState("")
    const [frequency, setFrequency] = useState("")

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
                setFrequency(response.data.frequency)
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
        
        {
            firePoints && (

                <div class="w-[50%] overflow-x-auto shadow-md sm:rounded-lg m-8">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase dark:text-gray-400 border-b border-gray-200">
            <tr>
                <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                    Alert details
                </th>
                <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                    
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Alert name
                </th>
                <td class="px-6 py-4 bg-gray-500">
                {alertName}
                </td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Frequency
                </th>
                <td class="px-6 py-4 bg-gray-500">
                    {
                        frequency === "d" ? "Daily" : 
                        frequency === "w" ? "Weekly":
                        frequency === "m" ? "Monthly":
                        frequency
                    }
                </td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Co-ordinates
                </th>
                <td class="px-6 py-4 bg-gray-500">
                    <ul>
                        <li>Points: {firePoints.lat_top} ,{firePoints.long_top}</li>
                        <li>(X,Y): {firePoints.x_axis}, {firePoints.y_axis}</li>
                    </ul>
                </td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Image link
                </th>
                <td class="px-6 py-4 bg-gray-500">
                    <Link to={`https://gibs.earthdata.nasa.gov/wmts/epsg4326/best/MODIS_Terra_CorrectedReflectance_TrueColor/default/${firePoints.date}/250m/8/${firePoints.x_axis}/${firePoints.y_axis}.jpg`}>

                        Image Link
                    </Link>
                </td>
            </tr>
        </tbody>
    </table>
</div>

            )
        }




            {/* <h1 className="header">Alert</h1>
            {
                firePoints && (
                    <div className="px-6 bg-white border-b dark:bg-gray-900 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700">
                        <td className="px-6 py-4">
                        
                                {alertName}
                           
                        </td>
                        <td className="px-6 py-4">
                            {frequency}
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
            } */}
        </div>
    )
}
