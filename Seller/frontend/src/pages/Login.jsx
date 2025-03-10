import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { login } from '../services/operations/authAPI';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting }
    } = useForm()

    const submithandler = async (data)=>{
      console.log("Form Data-> " , data);
      const {
        email,
        password
      } = data
  
      dispatch(login(
        email,
        password,
        navigate
      ))
    }
    

    useEffect(()=>{
      if(isSubmitSuccessful){
        reset({
          email: "",
          password: ""
        })
      }
    })

  return (
    <>
      <div className='flex w-11/12 items-center mx-auto'>
        <div className='w-[33%] mx-auto mt-6'>
          <div className='text-3xl flex justify-center mb-4'>
            <span>Login ---</span>
          </div>
          <form onSubmit={handleSubmit(submithandler)}>
          <label className=''>
            <p>Email:</p>
            <input
            className='w-full form-style'
            type='email'
            {...register("email", {required:{value:true, message:"This field is required"}})}
            />
            {errors.email && (
              <span className='text-red-700'>
              {errors.email.message}
            </span>
          )}
          </label>
          <div className='mt-2'>
            <label className='mt-2'>
                  <p>Password:</p>
                  <input
                  className=' w-full form-style'
                  type='password'
                  name='password'
                  {...register("password", {required:{value:true, message:"This field is required"},
                  })}
                  />
                  {errors.password && (
                      <span className='text-red-700'>
                          {errors.password.message}
                      </span>
                  )}
              </label>
          </div>
            <div className='flex justify-center'>
              <button
              className='text-white bg-black font-light px-8 py-2 mt-4'
              type='submit'
              disabled={isSubmitting}
              >
                Login
              </button>
            </div>
          </form>
          {/* Radio button */}
          {/* <div>
            <label className='mr-4'>
                <input
                  type='radio'
                  value='admin'
                  {...register("role", { required: true })}
                />
                Admin
              </label>
              <label className='mr-4'>
                <input
                  type='radio'
                  value='customer'
                  {...register("role", { required: true })}
                />
                Customer
              </label>
              <label className='mr-4'>
                <input
                  type='radio'
                  value='seller'
                  {...register("role", { required: true })}
                />
                Seller
              </label>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default Login