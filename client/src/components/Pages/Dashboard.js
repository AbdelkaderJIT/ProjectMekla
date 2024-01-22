import React from 'react'
import { useSelector } from 'react-redux'
import ManageFood from "../Food/ManageFood";

function Dashboard() {

  const user=useSelector((state)=>state.auth.user)

  return (
    <div style={{marginTop:"100px",marginLeft:"200px"}}>
      <h1>My SPACE</h1>
      <h1>{user && user.name} { user && user.lastName}</h1>
      <h3>{user && user.email}</h3>
      <ManageFood />
    </div>
    
  )
}

export default Dashboard
