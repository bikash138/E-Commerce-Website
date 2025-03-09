import React from 'react'
import { assets } from '../../assets/admin_assets/assets'
import { Link } from 'react-router-dom'
import {navBarLinks} from "../../../../frontend/src/data/navBarLinks"

const NavBar = () => {
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
            
            <Link to="/seller-login">
                <button>
                    Login
                </button>
            </Link>
            <Link to="/seller-signup">
                <button>
                    SignUp
                </button>
            </Link>
        </div>

     </div>
     </div>
    </>
  )
}

export default NavBar