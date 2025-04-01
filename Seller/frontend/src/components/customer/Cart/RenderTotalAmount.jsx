import React from 'react'
import { useSelector } from 'react-redux'

const RenderTotalAmount = () => {

  const {total} = useSelector((state)=>state.cart)

  return (
    <>
      <div className='flex justify-end'>
        <div className='w-[30%]'>
          {/* Total */}
          <div className='bg-slate-500 h-1'></div>
          <div className='flex justify-between items-center mt-2'>
            <p>Total</p>
            <p>₹ {total}</p>
          </div>
          <div className='bg-black text-white rounded-sm cursor-pointer p-2 w-[40%] flex items-center justify-center text-xl mt-4'>
            <button >Continue</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default RenderTotalAmount