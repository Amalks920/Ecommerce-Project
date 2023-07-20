import { useFormContext } from "react-hook-form"

export const Input=({label,type,id,placeHolder})=>{

    const {register}=useFormContext()

    return (

<div>
<label htmlFor={id} className="block text-sm font-medium text-gray-700 undefined">
      {label}
     </label> 
<div className="flex flex-col items-start">
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
</div>

    )
}


