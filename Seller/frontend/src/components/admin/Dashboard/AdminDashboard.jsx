import React from 'react'
import SideBar from '../../core/Dashboard/SideBar'
import { Outlet } from 'react-router-dom'
import { adminSidebarLinks } from '../../../data/sidebarLinks'

const AdminDashboard = () => {
  return (
    <div className='relative flex min-h-[calc(100vh-3.5rem)]'>
      <SideBar links={adminSidebarLinks}/>
      <div className='h-[calc(100vh-3.5rem)] w-full flex overflow-auto'>
        <div className='mx-auto w-11/12  py-10'>
          <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard