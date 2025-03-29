import React from 'react'
import { assets } from '../../assets/frontend_assets/assets'

const Cart = () => {
  return (
    <>
        <div className='w-11/12 mx-auto mt-11'>
            {/* Heading */}
            <div className='flex justify-between bg-slate-200 h-11 p-4 items-center rounded-md'>
                <p>Product</p>
                <p>Quantity</p>
                <p>Price</p>
            </div>
            
            {/* Cart Data */}
            <div className='flex justify-between h-24 p-4 items-center rounded-md mt-4'>
                {/* Product Pic and Remove button */}
                <div className='flex'>
                    <img className='w-20 h-18'  src={assets.p_img10}/>
                    <div className='flex flex-col items-center my-auto'>
                        <p>Name Of product</p>
                        <button className='text-red-500'>Remove</button>
                    </div>
                </div>
                {/* Quantity */}
                <div className='p-1 px-4 border border-black'>
                    <p>1</p>
                </div>
                {/* Price */}
                <div className='p-1 px-4'>
                    <p className='text-lg'>$999</p>
                </div>
            </div>

            {/* Total Area */}
            <div></div>
        </div>
    </>
  )
}

export default Cart