import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

function OpenRoute  ({children, role})  {
  const { token } = useSelector((state) => state.auth)
  
  if (token == null) {
    return children
  } else {
    return (
      <Navigate to={
        role === 'Admin' ? "/dashboard/analytics" :
        role === 'Seller' ? "/dashboard/profile" :
        role === 'Customer' ? "/customer/profile" :
        "/"
      }/>
    )
  }
}

export default OpenRoute