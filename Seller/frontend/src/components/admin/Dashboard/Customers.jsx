import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { RiNotification2Line } from 'react-icons/ri'
import { CgProfile } from "react-icons/cg"
import { TiTick } from "react-icons/ti"
import { BsHandbag } from "react-icons/bs";
import Card from '../../core/admin/Card'
import {Table, Tbody, Td, Th, Thead, Tr} from "react-super-responsive-table"
import { FaPlus } from 'react-icons/fa'


const Customers = () => {
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
                      placeholder="Search customers..."
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
        <div><Card icon={<CgProfile/>} heading={"Total Customers"} primaryData={"500"} secondaryData={"24.8%"}/></div>
        <div><Card icon={<BsHandbag/>} heading={"Active Shoppers"} primaryData={"43"} secondaryData={"9.9%"}/></div>
        <div><Card icon={<TiTick/>} heading={"Customer Retention"} primaryData={"76"} secondaryData={"15.3%"}/></div>
        <div className='col-span-3 mb-5 justify-between bg-white px-6 py-2 rounded-xl'>
                    <div className='flex justify-between'>
                      <p className='text-2xl font-semibold'>Customers List</p>
                      <div className='flex gap-x-7'>
                        <select className='p-2 flex items-center justify-center w-28 h-10 rounded-full bg-slate-200 text-black font-bold'>
                          <option value="All Sellers">All Customers</option>
                          <option value="New Seller">New Customers</option>
                          <option value="Top Sellers">Top Customers</option>
                        </select>
                        
                      </div>
                      <div className='flex items-center justify-center w-40 h-10 rounded-full bg-blue-700 text-white font-bold'>
                        <button className='flex gap-x-2 items-center'>
                          <FaPlus/>
                          <span>Add Customer</span>
                        </button>
                      </div>
                    </div>
                  </div>
      </div>

      {/* Customer table */}
      <div>
          <Table>
            <Thead>
              <Tr>
                <Th>Customer</Th>
                <Th>Status</Th>
                <Th>Purchases</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td><p>Seller Name</p><p>Email Id</p></Td>
                <Td>Verified</Td>
                <Td>₹2990</Td>
              </Tr>
            </Tbody>
          </Table>
        </div>

    </div>
  )
}

export default Customers