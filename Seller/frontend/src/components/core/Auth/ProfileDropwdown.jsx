import React from 'react'
import { CgProfile } from "react-icons/cg";
import { AiOutlineCaretDown } from "react-icons/ai";
import { Link } from 'react-router-dom';

const ProfileDropwdown = ({ role }) => {
  const getProfileLink = () => {
    if (role === 'Admin') {
      return '/dashboard/analytics';
    } else if (role === 'Seller') {
      return '/dashboard/profile';
    } else if (role === 'Customer') {
      return '/customer/profile';
    } else {
      return '/';
    }
  };

  return (
    <Link to={getProfileLink()}>
      <button>
        <div className='flex'>
          <CgProfile />
          <AiOutlineCaretDown />
        </div>
      </button>
    </Link>
  );
};

export default ProfileDropwdown;