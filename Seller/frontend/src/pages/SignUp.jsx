import React, { useEffect } from 'react'
import {useForm} from "react-hook-form"
import {toast} from "react-hot-toast"
import { useDispatch, useSelector } from 'react-redux'
import { setSignUpData } from '../redux/slices/authSlice'
import { signUp } from '../services/operations/authAPI'
import { useNavigate } from 'react-router-dom'

const SignUp = ({role}) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    //const {signUpData} = useSelector((state)=>state.auth)

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
            confirmPassword,
            role
        } = signData;

        console.log("Form Data-> " , signData);
        
        dispatch(setSignUpData(signData))
        dispatch(signUp(
            firstName,
            lastName,
            email,
            password,
            confirmPassword, 
            role,
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
                confirmPassword: "",
                role: ""
            })
        }
    },[isSubmitSuccessful])

  return (
    <>
    {isSubmitting && <div>Loading...</div>}
     <div className='flex w-11/12  items-center mx-auto'>
       <div className='w-[33%] mx-auto mt-6'>
        <div className=''>
         <div className='text-3xl flex justify-center mb-4'>
            <span>{role} SignUp ---</span>
         </div>
         
         <form 
         className='sm:flex-1'
         onSubmit={handleSubmit(submithandler)}>
            <div className='flex justify-between items-center mb-2'>
                <label className=''>
                    <p>First Name:</p>
                    <input
                    className='form-style'
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
                    <p>Last Name:</p>
                    <input
                    className='form-style '
                    type='text'
                    {...register("lastName",  {required:{value:true, message:"This field is required"}})}
                    />
                    {errors.lastName && (
                        <span className='text-red-700'>
                            {errors.lastName.message}
                        </span>
                    )}
                </label>
            </div>
            <label className='w-full '>
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
            <div className='flex justify-between mt-2'>
                <label>
                    <p>Password:</p>
                    <input
                    type='password'
                    name='password'
                    className='form-style'
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
                    <p>Confirm Password:</p>
                    <input
                    className='form-style'
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
                <input type="hidden" {...register('role')} value={role} />
            </div>
            <div className='flex justify-center'>
                <button
                className='text-white bg-black font-light px-8 py-2 mt-4'
                type='submit'
                disabled={isSubmitting}
                >
                    Create Account
                </button>
            </div>
         </form>

        </div>
       </div>
     </div>
    </>
  )
}

export default SignUp