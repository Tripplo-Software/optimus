import React, { FC } from 'react'
import '../index.css'

export interface Props {
  className: string
}
const Input = (props: Props) => {
  return <input {...props} />
}

export default Input
