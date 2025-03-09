import React, { useEffect } from 'react'
import {useForm} from "react-hook-form"
import {toast} from "react-hot-toast"
import { useDispatch, useSelector } from 'react-redux'
import { setSignUpData } from '../redux/slices/authSlice'
import { signUp } from '../services/operations/authAPI'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitSuccessful, isSubmitting }
    } = useForm()

    const submithandler = async (signData)=>{
        if(signData.password !== signData.confirmPassword){
            toast.error("Password Does not Match")
            return;
        }
        const {
            firstName,
            lastName,
            email,
            password,
            confirmPassword
        } = signData;

        console.log("Form Data-> " , signData);
        
        dispatch(setSignUpData(signData))
        dispatch(signUp(
            firstName,
            lastName,
            email,
            password,
            confirmPassword, 
            navigate
        ))
        
    }
    useEffect(()=>{
        if(isSubmitSuccessful){
            reset({
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                confirmPassword: ""
            })
        }
    },[isSubmitSuccessful])

  return (
    <>
    {isSubmitting && <div>Loading...</div>}
     <div className='flex w-11/12 items-center mx-auto'>
       <div className=''>
        <div>
         <p className='text-3xl'>
            Sign In
            {/* <hr className='h-[1.5px] w-8 border-none bg-black'/> */}
         </p>
         
         <form onSubmit={handleSubmit(submithandler)}>
            <label>
                First Name:
                <input
                 className='w-full '
                 type='text'
                 {...register("firstName", {required:{value:true, message:"This field is required"}})}
                />
                {errors.firstName && (
                    <span className='text-red-700'>
                        {errors.firstName.message}
                    </span>
                )}
            </label>
            <label>
                Last Name:
                <input
                 type='text'
                 {...register("lastName",  {required:{value:true, message:"This field is required"}})}
                />
                {errors.lastName && (
                    <span className='text-red-700'>
                        {errors.lastName.message}
                    </span>
                )}
            </label>
            <label>
                Email:
                <input
                 type='email'
                 {...register("email", {required:{value:true, message:"This field is required"}})}
                />
                {errors.email && (
                    <span className='text-red-700'>
                        {errors.email.message}
                    </span>
                )}
            </label>
            <label>
                Password:
                <input
                 type='password'
                 name='password'

                 {...register("password", {required:{value:true, message:"This field is required"},
                 minLength:{value:4, message:"Min Length is 4"}, maxLength:{value:8, message:"Min Length is 8"}  
                })}
                />
                {errors.password && (
                    <span className='text-red-700'>
                        {errors.password.message}
                    </span>
                )}
            </label>
            <label>
                Confirm Password:
                <input
                 type='password'
                 name='confirmPassword'
                 {...register("confirmPassword", {required:{value:true, message: "This field is Required"},
                 })}
                />
                {errors.confirmPassword && (
                    <span className='text-red-700'>
                        {errors.confirmPassword.message}
                    </span>
                )}
             </label>
            <button
             type='submit'
             disabled={isSubmitting}
            >
                Sign Up
            </button>

         </form>
        </div>
       </div>
     </div>
    </>
  )
}

export default SignUp