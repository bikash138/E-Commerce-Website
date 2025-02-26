import React from 'react'

const Profile = () => {
  return (
    <>
      <div>
        <h1 className='text-3xl'>My Profile--</h1>
        <div>
          <div className='flex'>
            <div>
              <p>Bikash Shaw</p>
              <p>vshaw138@gmail.com</p>
            </div>
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
              <p>First Name</p>
              <p>Last Name</p>
              <p>Address</p>
              <p>Contact Number</p>
              <p>Email</p>
              <p>Seller Since</p>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Profile