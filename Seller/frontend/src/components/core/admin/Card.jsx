import React from 'react'

const Card = ({
    heading,
    primaryData,
    secondaryData
}) => {
  return (
    <>
        <div className='flex flex-col w-full rounded-xl bg-white p-2'>
            <div className='ml-4'>
                <h2 className='text-md'>{heading}</h2>
                <h1 className='text-2xl font-bold'>{primaryData}</h1>
            </div>
            <div className='bg-slate-100 rounded-xl p-3'>
                <p className='text-green-700'>{secondaryData}</p>
            </div>

    </div>
    </>
  )
}

export default Card