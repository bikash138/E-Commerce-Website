import React from 'react'
import { CgProfile } from 'react-icons/cg'
import { CiLocationOn } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { CiVoicemail } from "react-icons/ci";
import { CiCreditCard1 } from "react-icons/ci";


const Profile1 = () => {
  return (
    <>
      <div>
        <h1>My Profile</h1>
        <div className='flex flex-col w-full gap-y-10'>

          {/* Personal Details */}
          <div className='flex w-full items-center gap-x-6'>
            <div>
              <CgProfile className='text-9xl'/>
            </div>
            <div>
              <p>Bikash Shaw</p>
              <div className='flex items-center'>
                <CiVoicemail/>
                <p>vshaw138@gmail.com</p>
              </div>
              <div className='flex items-center'>
                <CiPhone/>
                <p>7998273599</p>
              </div>
              <div className='flex items-center'>
                <CiLocationOn/>
                <p> 106 TN Mukherjee Road </p>
              </div>
              
            </div>
          </div>
          {/* Account Details */}
          <div className='flex w-full items-center gap-x-6'>
            <div>
              <div><h1 className='font-bold text-xl'>Personal Information</h1></div>
              <div>
                <p >Customer Since</p>
                <p className='font-semibold'>March 2020</p>
              </div>
              <div>
                <p >Customer type</p>
                <p className='font-semibold'>Standard</p>
              </div>
            </div>
            <div>
              <div className='flex justify-center'><h1 className='font-bold text-xl'>Payement Methods</h1></div>
              <div className='flex bg-slate-300 items-center p-3 rounded-2xl gap-x-3'>
                <div><CiCreditCard1 className='text-3xl'/></div>
                <div><p>Visa ****8907</p><p>Expires 12/2032</p></div>
              </div>
            </div>
          </div>
          
        </div>
        
      </div>
    </>
  )
}

export default Profile1