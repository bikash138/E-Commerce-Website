import React from 'react'

const Card = ({
    icon,
    heading,
    primaryData,
    secondaryData
}) => {
  return (
    <>
        <div className='flex flex-col w-full rounded-xl bg-white p-2'>
            <div className='ml-3 gap-x-4 flex'>
                <div className='flex items-center justify-center w-10 h-10 rounded-full bg-slate-300 text-blue-700 font-bold'>
                    {icon}
                </div>
                <div>
                    <h2 className='text-md'>{heading}</h2>
                    <h1 className='text-2xl font-bold'>{primaryData}</h1>
                </div>
            </div>
            <div className='bg-slate-100 rounded-xl p-3'>
                <p className='text-green-700'>{secondaryData}</p>
            </div>

    </div>
    </>
  )
}

export default Card