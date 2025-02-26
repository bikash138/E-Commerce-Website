import React from 'react'
import { CgProfile } from "react-icons/cg";
import { AiOutlineCaretDown } from "react-icons/ai";
import { Link } from 'react-router-dom';


const ProfileDropwdown = () => {
  return (
    <Link to="/dashboard-profile">
      <button>
        <div className='flex'>
            <CgProfile/>
            <AiOutlineCaretDown/>
        </div>
    </button>
    </Link>
  )
}

export default ProfileDropwdown