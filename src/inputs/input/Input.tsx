import React from 'react'
import '../../index.css'

export interface Props {
  className: string
  placeholder: string
  value?: string
}

const defaultProps = {
  className: 'bg-white border border-gray-400 hover:border-blue-400 focus:outline-none rounded py-2 w-auto',
}
const Input = (props: Props) => {
  return <input 
  {...props} />
}

Input.defaultProps = defaultProps
export default Input
