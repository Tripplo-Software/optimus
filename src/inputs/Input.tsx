import React, { FC } from 'react'
import '../index.css'

export interface Props {
  className: string
}

const defaultProps = {
  className: 'bg-white border border-gray-400 rounded p-2 w-auto',
}
const Input = (props: Props) => {
  return <input {...props} />
}

Input.defaultProps = defaultProps
export default Input
