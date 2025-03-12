import React from 'react'

const TopAttributes = () => {
  return (
    <>
        <div className='p-4'>
            <h1 className='text-3xl font-semibold'>Top Products</h1>
            <div className='mt-4 flex gap-y-4 flex-col'>
                <div className='flex bg-slate-100 rounded-xl px-4 py-3'>
                    <div className='flex items-center justify-center w-10 h-10 rounded-full bg-slate-300 text-blue-700 font-bold'>
                        1
                    </div>
                    <div className='ml-4'>
                        <p>Shirt</p>
                        <p>₹877 . 444 units</p>
                    </div>
                </div>
                <div className='flex bg-slate-100 rounded-xl px-4 py-3'>
                    <div className='flex items-center justify-center w-10 h-10 rounded-full bg-slate-300 text-blue-700 font-bold'>
                        2
                    </div>
                    <div className='ml-4'>
                        <p>Shirt</p>
                        <p>₹877 . 444 units</p>
                    </div>
                </div>
                <div className='flex bg-slate-100 rounded-xl px-4 py-3'>
                    <div className='flex items-center justify-center w-10 h-10 rounded-full bg-slate-300 text-blue-700 font-bold'>
                        3
                    </div>
                    <div className='ml-4'>
                        <p>Shirt</p>
                        <p>₹877 . 444 units</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default TopAttributes