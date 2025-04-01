import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../../components/core/Dashboard/SideBar'
import { sellerSidebarLinks } from '../../data/sidebarLinks'

const SellerDashboard = () => {
  return (
    <div className='relative flex min-h-[calc(100vh-3.5rem)]'>
      <SideBar links={sellerSidebarLinks}/>
      <div className='h-[calc(100vh-3.5rem)] w-full flex overflow-auto'>
        <div className='mx-auto w-11/12  py-10'>
          <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default SellerDashboard