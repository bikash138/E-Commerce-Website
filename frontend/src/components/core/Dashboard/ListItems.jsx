import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'
import { RxCross2 } from "react-icons/rx";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"
import { deleteProduct, fetchSellerProducts } from '../../../services/operations/productDetailsAPI'
import ConfirmationModal from '../../common/ConfirmationModal';

const ListItems = () => {

  const {token} = useSelector((state)=>state.auth)
  const [products, setProducts] = useState([])
  const [confirmationModal, setConfirmationModal] = useState(null)

  useEffect(()=>{
    const fetchProducts = async ()=>{
      const result = await fetchSellerProducts(token)
      if(result){
        setProducts(result)
      }
    }
    fetchProducts()
  },[])

  

  const deleteHandler = async (productId) => {
    try {
      await deleteProduct({ productId: productId }, token);
      const result = await fetchSellerProducts(token);
      if (result) {
        setProducts(result);
      }
      setConfirmationModal(null)
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <>
      <div>
        <h1 className='text-3xl'>Listed Items--</h1>

        {/* Products table */}
        <Table className='rounded-xl border border-black'>
          <Thead>
            <Tr className='flex gap-x-10 rounded-t-md border-b border-black px-6 py-2'>
              <Th className='flex-1 text-left text-sm font-bold uppercase '>Image</Th>
              <Th className='flex-1 text-center text-sm font-bold uppercase '>Name</Th>
              <Th className='flex-1 text-center text-sm font-bold uppercase '>Category</Th>
              <Th className='flex-1 text-center text-sm font-bold uppercase '>Price</Th>
              <Th className='flex-1 text-center text-sm font-bold uppercase '>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {products?.length === 0 ? (
              <Tr>
                <Td className='py-10 text-center text-2xl font-medium '>No Products Listed</Td>
              </Tr>
            ) : (
              products?.map((product)=>(
                <Tr className='flex justify-between gap-x-10 border-b border-black px-6 py-3'
                 key={product._id}>
                  <Td>
                    <img className='w-[60px] h-[60px]' src={product.productThumbnail}/>
                  </Td>
                  <Td className='text-sm font-medium text-black'>
                    <p>{product.productName}</p>
                  </Td>
                  <Td>
                    <p>{product.productCategory}</p>
                  </Td>
                  <Td>
                    <p>{product.productPrice}</p>
                  </Td>
                  <Td>
                    <button
                      onClick={()=>{
                        setConfirmationModal({
                          text1: "Do you really want to delete this Product",
                          text2: "All the data of this product will be deleted",
                          btn1Text: "Delete",
                          btn2Text: "Cancel",
                          btn1Handler: ()=>deleteHandler(product._id),
                          btn2Handler: ()=>setConfirmationModal(null)
                        })
                      }}
                      title="Delete"
                      
                    >
                      <RxCross2/>
                    </button>
                  </Td>
                </Tr>
              ))
            )}
          </Tbody>
        </Table>
      </div>
      {confirmationModal && <ConfirmationModal modalData={confirmationModal}/>}
    </>
  )
}

export default ListItems