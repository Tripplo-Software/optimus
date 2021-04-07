import React, { FC, InputHTMLAttributes } from 'react'
import '../../index.css'


export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  placeholder?: string
  value?: string
  onChange: any
  variant?: string,
  defaultValue?: number
  min?: number
  max?: number
}



const Input: FC<Props> = ({
  className,
  onChange,
  variant = "text",
  ...rest
}: Props) => {
  return (
    <input
      className={` ${className} bg-white border border-gray-400 hover:border-blue-400 focus:outline-none rounded py-2 w-24 stepper:style-none`}
      onChange={onChange}
      type={variant}
      {...rest}
    />
  )
}

export default Input;