import { FieldError } from "react-hook-form";

type InputFieldProps ={
    label:string;
    type?:string;
    register:any;
    name:string;
    defaultValue?:string;
    error?:FieldError;
    InputProps?:React.InputHTMLAttributes<HTMLInputElement>;
}

const InputField = (
   { label,
    type ="text",
    register,
    name,
    defaultValue,
    error,
    InputProps,
}:InputFieldProps
) => {
   
  return (
    <div className=" flex flex-col gap-2 w-full md:w-1/4">
    <label className="text-sm text-gray-500">{label}</label>
    <input
      type={type}
      {...register(name)}
      className="ring-2 ring-gray-300 p-2 rounded-md text-sm border-2 border-black w-full"
      {...InputProps}
      defaultValue={defaultValue}
    />
    
    {error?.message && (
      <p className="text-sm text-red-600">
        {error.message.toString()}
      </p>
    )}
  </div>
  )
}

export default InputField