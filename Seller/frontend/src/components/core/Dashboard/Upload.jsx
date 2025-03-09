import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { FiUploadCloud } from 'react-icons/fi'


const Upload = (
    {   
        name,
        label,  
        errors, 
        register, 
        setValue
    }) => {

    const [selectedFile, setSelectedFile] = useState(null)
    const[previewSource, setPreviewSource] = useState("")
    const inputRef = useRef(null)

    const onDrop = (acceptedFiles) => {
        const file = acceptedFiles[0]
        if(file){
            previewFile(file)
            setSelectedFile(file)
        }
    }

    const {getRootProps, getInputProps, isDragActive} = useDropzone({
        accept: {'image/*':['.jpeg', '.png', '.jpg']},
        maxFiles: 1,
        onDrop,
    })
    const previewFile = (file) => {
        console.log(file)
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend = () => {
            setPreviewSource(reader.result)
        }
    }

    useEffect(()=>{
        register(name, {required: true})
    },[register])

    useEffect(()=>{
        setValue(name, selectedFile)
    },[selectedFile, setValue])

    

  return (
    <>
     <div>
        <label className='text-lg' htmlFor={name}>
            {label}
        </label>
        <div className={`${
            isDragActive ? "bg-slate-500" : "bg-white"
        } min-h-[150px] cursor-pointer items-center justify-center rounded-md border-dashed border-2 border-slate-400 p-1`} 
        >
            {
                previewSource ? (
                    <div>
                        <img
                            src={previewSource}
                            className='mb-1'
                        />
                        {
                            <button
                                className='bg-red-500 text-white px-3 rounded hover:bg-red-700 transition duration-200 ml-9'
                                onClick={()=>{
                                    setPreviewSource("")
                                    setSelectedFile(null)
                                    setValue(name, null)
                                }}
                            >
                                Cancel
                            </button>
                        }
                    </div>
                    
                ) : (
                    <div
                        className=''
                        {...getRootProps()}
                    >
                        <input {...getInputProps()} ref={inputRef}/>
                        <div>
                            <FiUploadCloud className='text-9xl'/>
                        </div>
                        <p className='items-center ml-5 font-semibold'>Drag and drop'</p>
                    </div>
                )
            }
        </div>
        {errors[name] && <span className='text-pink-600'>This field is required</span>}
     </div>
    </>
  )
}

export default Upload