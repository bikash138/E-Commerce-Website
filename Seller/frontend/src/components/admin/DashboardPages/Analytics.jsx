import React from 'react'
import Card from '../../core/admin/Card'
import { CiSearch } from "react-icons/ci"
import { RiNotification2Line } from "react-icons/ri"
import { RiAdminLine } from "react-icons/ri"
import LineChart from '../../core/admin/AdminChart'
import TopAttributes from '../../core/admin/TopAttributes'
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { GoPeople } from "react-icons/go";
import { IoIosPeople } from "react-icons/io";


const Analytics = () => {

  const data = [
    {
      name: 'Page A',
      uv: 500,
      col: '400'
    },
    {
      name: 'Page B',
      uv: 1000,
      col: '1000'
    },
    {
      name: 'Page C',
      uv: 2000,
      col: '2500'
      
    },
    {
      name: 'Page D',
      uv: 2780,
      col: '3000'
    },
  ];

  return (
    <>
      <div>
        {/* Heading */}
        <div className='flex mb-5 justify-between bg-white px-6 py-2 rounded-xl'>
          <div className=''>
            <h1 className='text-3xl'>Your Analytics</h1>
          </div>

          {/* //Search Bar */}
          <div className='relative'>
            <input
                type="text"
                name="search"
                placeholder="Search..."
                className='rounded-2xl pl-10 pr-4 py-2 h-9 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400'
              />
              <label htmlFor='search' className='mt-1 left-1 absolute text-gray-500'>
                <CiSearch size={30}/>
              </label>
          </div>

          <div className=' flex gap-x-5'>
            <button><RiNotification2Line className='border-7 border-gray-400 rounded-full ' size={25}/></button>
            <button><RiAdminLine size={25}/></button>
          </div>
          
        </div>

        {/* Cards */}
        <div className='grid grid-cols-3 gap-x-6 gap-y-7'>
          <div><Card icon={<RiMoneyRupeeCircleLine/>} heading={"Total Revenue"} primaryData={"₹78,987"} secondaryData={"24.8%"}/></div>
          <div><Card icon={<GoPeople/>} heading={"Total Sellers"} primaryData={"240"} secondaryData={"9.9%"}/></div>
          <div><Card icon={<IoIosPeople/>} heading={"Total Customers"} primaryData={"4000"} secondaryData={"15.3%"}/></div>
          {/* Chart */}
          <div className='col-span-2 bg-white rounded-xl p-2'><LineChart /></div>
          <div className='bg-white rounded-xl'><TopAttributes/></div>
        </div>

        

      </div>
    </>
  )
}

export default Analytics