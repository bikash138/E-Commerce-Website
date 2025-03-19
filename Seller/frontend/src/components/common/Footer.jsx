import React from 'react'
import { assets } from '../../assets/frontend_assets/assets'
import { footerLinks } from '../../data/footerLinks'
import {Link} from "react-router-dom"
import { CiTwitter } from "react-icons/ci"
import { SlSocialGithub } from "react-icons/sl"
import { CiLinkedin } from "react-icons/ci"
import logo1 from "../../assets/logo1.png"

const Footer = () => {
  return (
    <>
     <div className='border-t-[1px] border-black '>
        <div className='flex justify-between mt-10 '>
            {/* Company Details */}
            <div className='w-[50%]'>
                <img
                src={logo1}
                className='w-64 h-14'
                />
                <p className='text-base'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt 
                    debitis accusamus, similique ea eius nam. Quia minus delectus veniam 
                    obcaecati ab, officia repellat pariatur sit voluptates! Nemo natus 
                    enim quo?
                </p>
            </div>
            {/* Links */}
            <div className='flex justify-end gap-x-12 mb-3'>
            <div className='w-[50%]'>
                <h4 className='font-semibold'>COMPANY</h4>
                <ul>
                    {
                        footerLinks.map((link, index)=>(
                            <li key={index}>
                                <Link to={link.link}>
                                    <span>{link.title}</span>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div>
                <h4 className='font-semibold'>GET IN TOUCH</h4>
                <p>+91 79982 73599</p>
                <p>vshaw138@gmail.com</p>
                <div className='flex gap-x-2'>
                    <Link ><CiTwitter/></Link>
                    <Link ><SlSocialGithub/></Link>
                    <Link ><CiLinkedin/></Link>
                </div>
            </div>
            </div>
        </div>

        <div className='flex justify-center mb-4 font-bold'>
            <p className=''>Copyright 2025@ Bikash Shaw - All Rights Reserved</p>
        </div>
     </div>
    </>
  )
}

export default Footer