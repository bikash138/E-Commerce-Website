import React from 'react'
import { assets } from '../../../assets/frontend_assets/assets'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../../../redux/slices/cartSlice'

const RenderCartProduct = () => {

    const {cart} = useSelector((state)=>state.cart)
    const dispatch = useDispatch()

    

  return (
    <>
        {/* Heading */}
        <div className='flex justify-between bg-slate-200 h-11 p-4 items-center rounded-md'>
            <p>Product</p>
            <p>Quantity</p>
            <p>Price</p>
        </div>
        
        {/* Cart Data */}
        {cart.map((product, indx)=>(
            <div 
                key={product._id}
                className='flex justify-between h-24 p-4 items-center rounded-md mt-4'
            >
                {/* Product Pic and Remove button */}
                <div className='flex'>
                    <img className='w-20 h-18'  src={product?.productThumbnail}/>
                    <div className='flex flex-col items-center my-auto'>
                        <p>{product?.productName}</p>
                        <button onClick={()=>dispatch(removeFromCart(product._id))}
                        className='text-red-500'>
                                Remove
                        </button>
                    </div>
                </div>
                {/* Quantity */}
                <div className='p-1 px-4 border border-black'>
                    <p>1</p>
                </div>
                {/* Price */}
                <div className='p-1 px-4'>
                    <p className='text-lg'>{product?.productPrice}</p>
                </div>
            </div>
        ))}
    </>
  )
}

export default RenderCartProduct