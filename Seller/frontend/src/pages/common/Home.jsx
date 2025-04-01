import React from 'react'
import { assets } from "../../assets/frontend_assets/assets"
import { Link } from 'react-router-dom'
import Footer from '../../components/common/Footer'

const Home = () => {
  return (
    <>
      <div className='w-11/12 mx-auto mt-9'>
        {/* Banner Image */}
        <div className='flex justify-between'>
          {/* Hero Text */}
          <div className='bg-goldenpink-500 w-[50%] rounded-tl-3xl rounded-bl-3xl p-6 px-16'>
            <div className='text-6xl mt-8'>
              <p>Discover Your</p>
              <p>Signature Style</p>
            </div>
            <div className='mt-3'>
              <p className='mb-3'>Curated collection for the modern ethusisats</p>
              <p>Free Shipping on oders above 499</p>
            </div>
            <div className='mt-10 p-4 w-40 rounded-full bg-black text-white flex justify-center items-center'>
              <button className=''>
                SHOP NOW
              </button>
            </div>
          </div>
          {/* Hero Image */}
          <div className='w-[50%] '>
            <img src={assets.hero_img} className='rounded-tr-3xl rounded-br-3xl'/>
          </div>
        </div>

        {/* Shop by Category Section */}
        <div className='mt-6'>
          <h1 className='text-2xl'>Shop by Category</h1>
          <div className='grid grid-cols-4 gap-x-4 mt-3'>
            <div className='bg-slate-200 flex flex-col rounded-t-2xl'>
              <img src={assets.p_img1} className='h-auto rounded-t-2xl'/>
              <div className='flex justify-center mt-1'>
                <p className='text-lg '>TOPS</p>
              </div>
            </div>
            <div className='bg-slate-200 flex flex-col rounded-t-2xl'>
              <img src={assets.p_img10} className='h-auto rounded-t-2xl'/>
              <div className='flex justify-center mt-1'>
                <p className='text-lg '>BOTTOMWEAR</p>
              </div>
            </div>
            <div className='bg-slate-200 flex flex-col rounded-t-2xl'>
              <img src={assets.p_img45} className='h-auto rounded-t-2xl'/>
              <div className='flex justify-center mt-1'>
                <p className='text-lg '>WINTERWEAR</p>
              </div>
            </div>
            <div className='bg-slate-200 flex flex-col rounded-t-2xl'>
              <img src={assets.p_img30} className='h-auto rounded-t-2xl'/>
              <div className='flex justify-center mt-1'>
                <p className='text-lg '>KIDS</p>
              </div>
            </div>
          </div>
        </div>

        {/* Trending Now Section */}
        <div className='mt-6'>
          <h1 className='text-2xl'>Trending Now</h1>
          <div className='flex'>
            <div className='w-[50%]'>
              <img src={assets.hero_img} className='h-auto rounded-t-2xl'/>
              <div className='flex justify-center mt-1'>
                <p className='text-lg '>TOPS</p>
              </div>
            </div>
            <div className='grid grid-cols-2'>
              
            </div>
          </div>
        </div>

        <Footer/>
      </div>
    </>
  )
}

export default Home