import React from 'react'
import { auth } from '../config/firebase'

const Dashboard = () => {
    const email = auth?.currentUser?.email;
    console.log("from dashboard",email)
  return (
    <div>Dashboard - {email}</div>
  )     
}

export default Dashboard