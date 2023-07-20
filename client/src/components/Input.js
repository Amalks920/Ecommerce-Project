import { useFormContext } from "react-hook-form"
import { MdError } from 'react-icons/md'
import { AnimatePresence,motion } from "framer-motion"
import { findInputError,isFormInvalid } from "../utils/Error"

export const Input=({label,type,id,placeHolder,validation,name})=>{

    const {
        register,
        formState:{errors}
    }=useFormContext()

    const inputError = findInputError(errors, label)
    const isInvalid = isFormInvalid(inputError)

    return (

<div>
<label htmlFor={id} className="block text-sm font-medium text-gray-700 undefined">
      {label}
     </label> 
<div className="flex flex-col items-start">

<AnimatePresence mode="wait" initial={false}>
          {isInvalid && (
            <InputError
              message={inputError.error.message}
              key={inputError.error.message}
            />
          )}
        </AnimatePresence>
      </div>

<input type="text" name="name"
placeholder={placeHolder}
{...register(label,{
    required:{
        value:true,
        message:'required'
    }
})}

 className="block w-full mt-1 border-gray-300
 rounded-md shadow-sm focus:border-indigo-300
  focus:ring focus:ring-indigo-200 focus:ring-opacity-50"/>
</div>


    )
}


const InputError = ({ message }) => {
    return (
      <motion.p
        className="flex items-center gap-1 px-2 font-semibold text-red-500 bg-red-100 rounded-md"
        {...framer_error}
      >
        <MdError />
        {message}
      </motion.p>
    )
  }
  
  const framer_error = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 },
    transition: { duration: 0.2 },
  }

