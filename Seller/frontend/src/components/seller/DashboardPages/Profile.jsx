import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {

  const { user } = useSelector((state)=> state.profile)
  const formattedDate = user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : '';


  return (
    <>
      <div>
        <h1 className='text-3xl'>My Profile--</h1>
        <div>
          <div className='flex'>
            
          </div>
          <div className=''>
            <div className='flex'>
              <div>
                <p>Personal Details</p>
              </div>
              <div>
                <button>Edit</button>
              </div>
            </div>
            <div className='grid grid-cols-2 gap-4'>
              <p>First Name: {user?.firstName}</p>
              <p>Last Name: {user?.lastName}</p>
              <p>Address:</p>
              <p>Contact Number:</p>
              <p>Email: {user?.email}</p>
              <p>Seller Since: {formattedDate}</p>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Profile