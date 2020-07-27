import React, { FC } from 'react'
import '../index.css'

export interface Props {
  className: string
}

const defaultProps = {
  className: 'bg-white border border-gray-400',
}
const Input = (props: Props) => {
  return <input {...props} />
}

Input.defaultProps = defaultProps
export default Input
