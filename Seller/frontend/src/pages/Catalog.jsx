import React, { useEffect, useState } from 'react'
import { fetchAllProducts } from '../services/operations/productDetailsAPI'
import ProductCard from '../components/common/ProductCard'
import { Link } from "react-router-dom"

const Catalog = () => {

  const[products, setProducts] = useState([])

  useEffect(()=>{
    const fetchProducts = async()=>{
      const result = await fetchAllProducts() 
      if(result){
        setProducts(result)
      }
    }
    fetchProducts()
  },[])

  return (
    <>
      <div className='flex'>

        {/* SideBar */}
        <div className='flex h-[calc(100vh-3.5rem)] min-w-[220px] flex-col py-10'>
          <div className='mx-4'>
              <h1 className='font-medium text-2xl mb-4'>Filters</h1>
              <div className='flex flex-col p-2 border-black border-[1px] rounded-md'>
                <p className='font-medium'>CATEGORIES</p>
                <div className='mt-2'>
                  <div><input type='checkbox' value="Men"/><span>Men</span></div>
                  <div><input type='checkbox' value="Women"/><span>Women</span></div>
                  <div><input type='checkbox' value="Kids"/><span>Kids</span></div>
                </div>
              </div>

              <div className='flex flex-col p-2 border-black border-[1px] mt-3 rounded-md'>
                <p className='font-medium'>TYPE</p>
                <div className='mt-2'>
                  <div><input type='checkbox' value="Topwear"/><span>Topwear</span></div>
                  <div><input type='checkbox' value="BottomWear"/><span>BottomWear</span></div>
                  <div><input type='checkbox' value="Winterwear"/><span>Winterwear</span></div>
                </div>
              </div>
          </div>
        </div>

        {/* Outlet */}
        <div className='mx-auto w-11/12 py-5 px-5'>
          <div className='flex justify-between'>
            <p className='text-3xl'>ALL COLLECTIONS ---</p>
            <div><p>Sort by: Relevant</p></div>
          </div>
          <div className='grid grid-cols-4 gap-x-4 gap-y-3 mt-10'>
            {
              products?.length === 0 ? (
                <div>No Products Listed Yet</div>
              ) : (
                products?.map((product)=>(
                  <Link key={product._id} 
                    to={`/product/${product._id}`}
                    className=''
                  >
                    <ProductCard 
                      name={product.productName} 
                      price={product.productPrice}
                      thumbnail={product.productThumbnail}
                    />
                  </Link>
                ))
              )
            }
          </div>
        </div>

      </div>
    </>
  )
}

export default Catalog