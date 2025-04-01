import React from 'react'
import { useSelector } from 'react-redux'
import RenderCartProduct from './RenderCartProduct'
import RenderTotalAmount from './RenderTotalAmount'

const Cart = () => {

    const{ total, totalItems } = useSelector((state)=>state.cart)
    //console.log("")

  return (
    <>
        <div className='w-11/12 mx-auto mt-11'>
            <p>{totalItems} Products in Cart</p>
            {totalItems > 0 ? (
                <div>
                    <RenderCartProduct/>
                    <RenderTotalAmount/>
                </div>
            ) : (
                <p>Your Cart is Emmpty</p>
            )}
        </div>
    </>
  )
}

export default Cart