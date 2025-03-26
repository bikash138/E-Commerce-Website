import React from 'react'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'


const Orders1 = () => {
  return (
    <>
      <div>
        <h1>My Orders</h1>
        

        <Table className='rounded-xl border border-black'>
          <Thead>
            <Tr className='flex gap-x-10 rounded-t-md border-b border-black px-6 py-2'>
              <Th className='flex-1 text-left text-sm font-bold uppercase '>Image</Th>
              <Th className='flex-1 text-center text-sm font-bold uppercase '>Name</Th>
              <Th className='flex-1 text-center text-sm font-bold uppercase '>Category</Th>
              <Th className='flex-1 text-center text-sm font-bold uppercase '>Price</Th>
              <Th className='flex-1 text-center text-sm font-bold uppercase '>Status</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr className='flex justify-between gap-x-10 border-b border-black px-6 py-3'>
              <Td>Image</Td>
              <Td>Name</Td>
              <Td>Category</Td>
              <Td>Price</Td>
              <Td>Shipped</Td>
            </Tr>
          </Tbody>
        </Table>
      </div>
    </>
  )
}

export default Orders1