import React from 'react'
import Card from '../../core/admin/Card'
import { CiSearch } from 'react-icons/ci'
import { RiNotification2Line } from 'react-icons/ri'
import { CgProfile } from "react-icons/cg"
import { FaPlus } from "react-icons/fa"
import { TiTick } from "react-icons/ti"
import {Table, Tbody, Td, Th, Thead, Tr} from "react-super-responsive-table"

const Sellers = () => {
  return (
    <div>
      {/* Heading */}
      <div className='flex mb-5 justify-between bg-white px-6 py-2 rounded-xl'>
          <div className=''>
            <h1 className='text-3xl'>Sellers</h1>
          </div>

          {/* //Search Bar */}
          <div className='relative'>
            <input
                type="text"
                name="search"
                placeholder="Search sellers..."
                className='rounded-2xl pl-10 pr-4 py-2 h-9 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400'
              />
              <label htmlFor='search' className='mt-1 left-1 absolute text-gray-500'>
                <CiSearch size={30}/>
              </label>
          </div>

          <div className=' flex gap-x-5'>
            <button><RiNotification2Line className='border-7 border-gray-400 rounded-full ' size={25}/></button>
            {/* <button><RiAdminLine size={25}/></button> */}
          </div>
          
        </div>

        {/* Cards */}
        <div className='grid grid-cols-3 gap-x-6 gap-y-7'>
          <div><Card icon={<CgProfile/>} heading={"Total Sellers"} primaryData={"500"} secondaryData={"24.8%"}/></div>
          <div><Card icon={<FaPlus/>} heading={"New Sellers"} primaryData={"43"} secondaryData={"9.9%"}/></div>
          <div><Card icon={<TiTick/>} heading={"Top Performers"} primaryData={"76"} secondaryData={"15.3%"}/></div>
          <div className='col-span-3 mb-5 justify-between bg-white px-6 py-2 rounded-xl'>
            <div className='flex justify-between'>
              <div className='flex gap-x-7'>
                <select className='p-2 flex items-center justify-center w-28 h-10 rounded-full bg-slate-200 text-black font-bold'>
                  <option value="All Sellers">All Sellers</option>
                  <option value="New Seller">New Sellers</option>
                  <option value="Top Sellers">Top Sellers</option>
                </select>
                <select className='p-2 flex items-center justify-center w-28 h-10 rounded-full bg-slate-200 text-black font-bold'>
                  <option value="All"> Status: All</option>
                  <option value="Peding">Pending</option>
                  <option value="All">Verified</option>
                </select>
                <select className='p-2 flex items-center justify-center w-40 h-10 rounded-full bg-slate-200 text-black font-bold'>
                  <option value="Most Sales">Sort: Most Sales</option>
                  <option value="Least Sales">Least Sales</option>
                </select>
              </div>
              <div className='flex items-center justify-center w-32 h-10 rounded-full bg-blue-700 text-white font-bold'>
                <button className='flex gap-x-2 items-center'>
                  <FaPlus/>
                  <span>Add Seller</span>
                </button>
              </div>
            </div>
          </div>
          
        </div>

        {/* Seller table */}
        <div>
          <Table>
            <Thead>
              <Tr>
                <Th>Seller</Th>
                <Th>Product Categories</Th>
                <Th>Status</Th>
                <Th>Sales</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td><p>Seller Name</p><p>Email Id</p></Td>
                <Td>Categories</Td>
                <Td>Verified</Td>
                <Td>₹5678</Td>
              </Tr>
            </Tbody>
          </Table>
        </div>
    </div>
  )
}

export default Sellers