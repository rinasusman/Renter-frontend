import React from 'react'
import SideNav from '../../components/Admin/Sidenav/SideNav'
import Dashboard from '../../components/Admin/Dashboard'



const AdminHome = () => {
  return (
    <div className='flex'>
      <div className='basis-[13%] h-[100vh]'>
        <SideNav />
      </div>
      <div className='basis-[87%] border'>
        <Dashboard />
      </div>
    </div>

  )
}

export default AdminHome