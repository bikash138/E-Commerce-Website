import React from 'react'
import { useForm } from 'react-hook-form'
import {useSelector} from 'react-redux'
import { useEffect } from 'react'
import Upload from '../../core/Dashboard/Upload'
import { addProductDetails } from '../../../services/operations/productDetailsAPI'


const AddItems = () => {
  const {token} = useSelector((state)=>state.auth)
  
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitSuccessful, isSubmitting }
  } = useForm()

 

  const submithandler = async (data) => {
    console.log(data)

    const formData = new FormData()
    formData.append("productName", data.productName)
    formData.append("productDescription", data.productDescription)
    formData.append("productPrice", data.productPrice)
    formData.append("productCategory", data.productCategory)
    formData.append("productSubCategory", data.productSubCategory)
    formData.append("productThumbnail", data.productThumbnail)

    addProductDetails(formData, token)
  }

  useEffect(()=>{
    if(isSubmitSuccessful){
      reset({
        productName: "",
        productDescription: "",
        productPrice: "",
        productCategory: "",
        productSubCategory: "",
        //productThumbnail: ""
      })
    }
  },[isSubmitSuccessful])

  return (
    <>
      <div>
        <h1 className='text-3xl mb-6'>Add Product--</h1>
        

        {/* Form */}
        <form onSubmit={handleSubmit(submithandler)}>
          <div>
            <div className='w-[18%] mb-3'>
              <Upload
                  name='productThumbnail'
                  label='Upload Thumbnail'
                  register={register}
                  setValue={setValue}
                  errors={errors}
              />
              
            </div>
            <label>
              <p className='text-lg'>Product Name</p>
              <input
                type="text"
                placeholder="Type Here"
                {...register("productName", { required: true })}
                className='border-black border-[1px] rounded-sm p-2 w-[40%] mb-3'
              />
              {errors.productName && <span>This field is required</span>}
            </label>
            <label>
              <p>Product Description</p>
              <textarea
                type="text"
                placeholder="Write description here..."
                {...register("productDescription", { required: true })}
                className='border-black border-[1px] rounded-sm p-2 w-[40%] mb-3'
              />
              {errors.productName && <span>This field is required</span>}
            </label>
            <label>
              <p>Product Price</p>
              <input
                type="number"
                placeholder="₹"
                {...register("productPrice", { required: true })}
                className='border-black border-[1px] rounded-sm p-2 w-[40%] mb-3'
              />
              {errors.productPrice && <span>This field is required</span>}
            </label>
            {/* Category and Sub Category */}
            <div className='flex w-[40%] gap-x-8 mb-3'> 
              <label>
                <p>Product Category</p>
                <select
                  {...register("productCategory", { required: true })}
                  className='border-black border-[1px] rounded-sm p-1'
                >
                  <option value="men">Men</option>
                  <option value="women">Women</option>
                  <option value="kids">Kids</option>
                </select>
                {errors.productCategory && <span>This field is required</span>}
              </label>
              <label>
                <p>Sub Category</p>
                <select
                    {...register("productSubCategory", { required: true })}
                    className='border-black border-[1px] rounded-sm p-1 '
                  >
                    <option value="topwear">Topwear</option>
                    <option value="bottomwear">Bottomwear</option>
                    <option value="winterwear">Winterwear</option>
                  </select>
                  {errors.productSubCategory && <span>This field is required</span>}
              </label>
            </div>
            {/* <label>
              <p>Product Size</p>
              <div>
                <input type='checkbox' name='small' value='small'/>
                <label for='small'>Small</label>
                <input type='checkbox' name='medium' value='medium'/>
                <label for='medium'>Medium</label>
                <input type='checkbox' name='large' value='large'/>
                <label for='large'>Large</label>
              </div>
            </label> */}
            <button 
             type='submit' 
             className='text-white bg-black font-light px-8 py-2 mt-4'
             disabled={isSubmitting}
            >
              Add Item
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default AddItems