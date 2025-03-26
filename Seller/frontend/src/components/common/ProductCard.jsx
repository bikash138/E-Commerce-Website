import React from 'react'

const ProductCard = ({name, price, thumbnail}) => {
  return (
    <>
        <div className='flex flex-col'>
            <img className='rounded-xl' src={thumbnail}/>
            <p>{name}</p>
            <p>${price}</p>
        </div>
    </>
  )
}

export default ProductCard