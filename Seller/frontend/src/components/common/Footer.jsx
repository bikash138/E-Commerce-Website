import React from 'react'
import { assets } from '../../assets/frontend_assets/assets'
import { footerLinks } from '../../data/footerLinks'
import {Link} from "react-router-dom"
import { CiTwitter } from "react-icons/ci"
import { SlSocialGithub } from "react-icons/sl"
import { CiLinkedin } from "react-icons/ci"

const Footer = () => {
  return (
    <>
     <div className='flex'>
        {/* Company Details */}
        <div className='w-[50%]'>
            <img
             src={assets.logo}
            />
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt 
                debitis accusamus, similique ea eius nam. Quia minus delectus veniam 
                obcaecati ab, officia repellat pariatur sit voluptates! Nemo natus 
                enim quo?
            </p>
        </div>
        {/* Links */}
        <div className='flex justify-end'>
         <div className='w-[50%]'>
            <h4>COMPANY</h4>
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
            <h4>GET IN TOUCH</h4>
            <span>+91 79982 73599</span>
            <span>vshaw138@gmail.com</span>
            <div className='flex'>
                <Link ><CiTwitter/></Link>
                <Link ><SlSocialGithub/></Link>
                <Link ><CiLinkedin/></Link>
            </div>
         </div>
        </div>
     </div>

     <div className='flex justify-center'>
        <p>Copyright 2025@ Bikash Shaw - All Right Reserved</p>
     </div>
    </>
  )
}

export default Footer