import React, { FC, InputHTMLAttributes } from 'react'
import '../../index.css'
// @ts-ignore
// import styled from 'styled-components'

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

// const StyledInput = styled.input`
// input[type=number].input-number–noSpinners { -moz-appearance: textfield; }
// input[type=number].input-number–noSpinners::-webkit-inner-spin-button,
// input[type=number].input-number–noSpinners::-webkit-outer-spin-button {
// -webkit-appearance: none;
// margin: 0;
// }
// `

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
      data-testid="input"
      {...rest}
    />
  )
}

export default Input;