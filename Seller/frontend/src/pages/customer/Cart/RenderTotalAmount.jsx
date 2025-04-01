import React from 'react'
import { useSelector } from 'react-redux'

const RenderTotalAmount = () => {

  const {total} = useSelector((state)=>state.cart)

  return (
    <div>{total}</div>
  )
}

export default RenderTotalAmount