import React from 'react'

import logo1 from "../../assets/logo1.png"
import logo2 from "../../assets/logo2.png"
import logo3 from "../../assets/logo3.png"
import { navBarLinks } from '../../data/navBarLinks'
import { Link, useNavigate } from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux"
import ProfileDropwdown from '../core/Auth/ProfileDropwdown'
import { logout } from '../../services/operations/authAPI'
import RoleDropdown from './RoleDropdown'

const NavBar = ({role}) => {
    
    const {token} = useSelector((state)=>state.auth)
    const dispatch = useDispatch();
    const navigate = useNavigate();

  return (
    <>
     <div className='flex h-14 items-center justify-center mt-4'>
     <div className='flex w-11/12 my-5 justify-between items-center'>
        {/* Logo */}
        <Link to='/'>
            <img
            className='w-64 h-14'
            src={role === 'Admin' ? logo2 : role === 'Seller' ? logo3 : logo1}
            />
        </Link>

        {/* Links */}
        <nav>
            <ul className='flex gap-6'>
                {
                navBarLinks.map((links, index)=>(
                    <li key={index}>
                        <Link to={links.link}>
                         <p>{links.title}</p>
                        </Link>
                    </li>
                ))
                }
            </ul>
        </nav>
        {/* User Button */}
        
        <RoleDropdown role={role}/>

        {/* Buttons */}
        <div className='gap-4 flex'>
            {token == null && (
                <Link to="/customer/login">
                    <button>
                        Login
                    </button>
                </Link>
            )}
            {token == null && (
                <Link to="/customer/signup">
                    <button>
                        SignUp
                    </button>
                </Link>
            )}
            {token != null && <ProfileDropwdown role={role}/>}
            {token != null && <button onClick={()=>dispatch(logout(navigate))}>Logout</button>}
        </div>

     </div>
     </div>
    </>
  )
}

export default NavBar