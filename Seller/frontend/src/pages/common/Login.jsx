import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { login } from '../../services/operations/authAPI';
import { Link, useNavigate } from 'react-router-dom';

const Login = ({role}) => {

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
        password,
        role
      } = data
  
      dispatch(login(
        email,
        password,
        role,
        navigate
      ))
    }
    

    useEffect(()=>{
      if(isSubmitSuccessful){
        reset({
          email: "",
          password: "",
          role: ""
        })
      }
    })

  return (
    <>
      <div className='flex w-11/12 items-center mx-auto'>
        <div className='w-[33%] mx-auto mt-6'>
          <div className='text-3xl flex justify-center mb-4'>
            <span>{role} Login ---</span>
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
          <input type="hidden" {...register('role')} value={role} />
          {/* Role Section */}
          {/* <div className='mt-4'>
            <p className='mb-2'>Role:</p>
            <div className='flex gap-4'>
              <label className='flex items-center'>
                <input
                  type='radio'
                  value='Admin'
                  {...register("role", { required: true })}
                  className='mr-2'
                />
                Admin
              </label>
              <label className='flex items-center'>
                <input
                  type='radio'
                  value='Customer'
                  {...register("role", { required: true })}
                  className='mr-2'
                />
                Customer
              </label>
              <label className='flex items-center'>
                <input
                  type='radio'
                  value='Seller'
                  {...register("role", { required: true })}
                  className='mr-2'
                />
                Seller
              </label>
            </div>
            {errors.role && (
              <span className='text-red-700'>
                {errors.role.message}
              </span>
            )}
          </div> */}
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
          {
            role === 'Seller' ? (
              <Link to="/seller/signup">Become a Seller</Link>
            ) : role === 'Admin' ? (
              <Link to="/admin/signup">Become a Admin</Link>
            ) : null
          }
        </div>
      </div>
    </>
  )
}

export default Login