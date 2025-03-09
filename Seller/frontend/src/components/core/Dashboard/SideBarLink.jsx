import React from 'react'
import * as Icons from "react-icons/vsc"
import { useDispatch } from 'react-redux'
import { matchPath, NavLink, useLocation } from 'react-router-dom'

const SideBarLink = ({link , iconName }) => {

    const location = useLocation()
    const dispatch = useDispatch()
    const Icon = Icons[iconName]

    const matchRoute = (route)=>{
        return matchPath({path:route} , location.pathname)
    }

  return (
    <NavLink
        to={link.path}
        className={`relative px-8 py-2 text-sm font-medium ${
            matchRoute(link.path)
            ? "bg-black text-white"
            : "bg-opacity-0 text-black"
        } transition-all duration-200`}
    >
        <div className='flex items-center gap-x-2'>
            {/* <Icon className="text-lg"/> */}
            <span>{link.name}</span>
        </div>

    </NavLink>
  )
}

export default SideBarLink