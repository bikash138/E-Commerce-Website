import React from 'react'
import SideBarLink from './SideBarLink'

const SideBar = ({links}) => {
  return (
    <>
     <div className='flex h-[calc(100vh-3.5rem)] min-w-[220px] flex-col border-r-[1px] border-r-black py-10'>
        <div className='flex flex-col'>
            {
                links.map((link)=>(
                    <SideBarLink key={link.id} link={link} iconName={link.icon}/>
                ))
            }
        </div>
     </div>
    </>
  )
}

export default SideBar