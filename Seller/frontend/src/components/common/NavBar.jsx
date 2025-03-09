import React from 'react'
import { assets  } from '../../assets/frontend_assets/assets'
import { navBarLinks } from '../../data/navBarLinks'
import { Link, useNavigate } from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux"
import ProfileDropwdown from '../core/Auth/ProfileDropwdown'
import { logout } from '../../services/operations/authAPI'

const NavBar = () => {
    
    const {token} = useSelector((state)=>state.auth)
    const dispatch = useDispatch();
    const navigate = useNavigate();

  return (
    <>
     <div className='flex h-14 items-center justify-center'>
     <div className='flex w-11/12 my-5 justify-between items-center'>
        {/* Logo */}
        <Link to='/'>
            <img
            src={assets.logo}
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

        {/* Buttons */}
        <div className='gap-4 flex'>
            {token == null && (
                <Link to="/login">
                    <button>
                        Login
                    </button>
                </Link>
            )}
            {token == null && (
                <Link to="/signup">
                    <button>
                        SignUp
                    </button>
                </Link>
            )}
            {token != null && <ProfileDropwdown/>}
            {token != null && <button onClick={()=>dispatch(logout(navigate))}>Logout</button>}
        </div>

     </div>
     </div>
    </>
  )
}

export default NavBar