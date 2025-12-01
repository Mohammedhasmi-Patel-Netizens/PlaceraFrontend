import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{
  className? : string
}

const Input : React.FC<InputProps> = ({ className = '', ...props})=>{
  return (
    <input 

    className={`border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-orange-500 transition ${className}`}
    {...props}
    
    
    />
  )

}

export default Input;