import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { FaPlus } from 'react-icons/fa'
import { RiNotification2Line } from 'react-icons/ri'
import Card from '../../core/admin/Card'
import { IoMdMan } from "react-icons/io";
import { IoIosWoman } from "react-icons/io";
import { TbMoodKid } from "react-icons/tb";

const Categories = () => {
  return (
    <div>
      {/* Heading */}
        <div className='flex mb-5 justify-between bg-white px-6 py-2 rounded-xl'>
                <div className=''>
                  <h1 className='text-3xl'>Categories</h1>
                </div>
      
                {/* //Search Bar */}
                <div className='relative'>
                  <input
                      type="text"
                      name="search"
                      placeholder="Search categories..."
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

      {/* Create Category */}
      <div className='col-span-3 mb-5 justify-between bg-white px-6 py-2 rounded-xl'>
        <div className='flex justify-between'>
          <div className='flex gap-x-7'>
            <button>
              All
            </button>
            <button>
              Active
            </button>
            <button>
              Draft
            </button>
          </div>
          <div className='flex items-center justify-center w-52 h-10 rounded-full bg-blue-700 text-white font-bold'>
            <button className='flex gap-x-2 items-center'>
              <FaPlus/>
              <span>Add Sub-Category</span>
            </button>
          </div>
        </div>
      </div>   
      
      {/* Cards*/}
      <div className='grid grid-cols-3 gap-x-6 gap-y-7'>
        <div><Card icon={<IoMdMan/>} heading={"Man"} primaryData={"3 items"} secondaryData={"24.8%"}/></div>
        <div><Card icon={<IoIosWoman/>} heading={"Woman"} primaryData={"3 items"} secondaryData={"24.8%"}/></div>
        <div><Card icon={<TbMoodKid/>} heading={"Kids"} primaryData={"3 items"} secondaryData={"24.8%"}/></div>

      </div>
      
    </div>
  )
}

export default Categories