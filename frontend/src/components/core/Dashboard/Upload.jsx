import React, { useCallback, useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { FiUploadCloud } from 'react-icons/fi'


const Upload = (
    {label, name, errors, register, setValue}) => {

    //const [setSelectedFile, setSelectedFile] = useState(null)

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

    useEffect(()=>{
        register(name, {required: true})
    },[register])

    useEffect(()=>{
        setValue(name, files)
    },[files, setValue])

    

    const thumbs = files.map((file)=>(
        <div key={file.name} className='h-[95%] w-full p-2'>
            <img
                src={file.preview}
                className='object-cover rounded-md'
                onLoad={()=>URL.revokeObjectURL(file.preview)}
            />
            
        </div>
    ))

    

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
                files.length === 0 ? (
                    <div {...getRootProps()} className='flex w-full items-center p-6'>
                        <input {...getInputProps()}/>
                        <div className='grid aspect-square place-items-center rounded-full'>
                            <FiUploadCloud className='text-8xl'/>
                        </div>
                    </div>
                ) : (
                    <div>
                        {thumbs}
                        <div className='w-full flex justify-between items-center'>
                            <p
                                className='bg-red-500 text-white rounded-md m-auto px-2'
                                type='button'
                                onClick={()=>{
                                    setFiles([])
                                    setValue(name, null)
                                }}
                            >
                                Cancel
                            </p>
                        </div>
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