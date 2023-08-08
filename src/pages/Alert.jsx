import React from 'react'
import { useParams } from 'react-router-dom'

export default function Alert() {
    const {alertId} = useParams();
    console.log(alertId)
  return (
    <div>Alert</div>
  )
}
