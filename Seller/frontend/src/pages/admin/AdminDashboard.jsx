import React from 'react'
import { adminSidebarLinks } from '../../data/sidebarLinks'
import { Outlet } from 'react-router-dom'
import SideBar from '../../components/core/Dashboard/SideBar'

const AdminDashboard = () => {
  return (
    <div className='relative flex min-h-[calc(100vh-3.5rem)] '>
      <SideBar links={adminSidebarLinks}/>
      <div className='h-[calc(100vh-3.5rem)] w-full flex overflow-auto bg-slate-100'>
        <div className='mx-auto w-11/12  py-10 '>
          <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard