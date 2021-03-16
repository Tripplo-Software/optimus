import React, { FC } from 'react'
import '../index.css'

interface Props {
  className: string
  children: any
}

const HeadingOne: FC<Props> = ({ children, className }: Props) => (
  <h1 className={` ${className} text-6xl text-black font-poppins`}>
    {children}
  </h1>
)

export default HeadingOne
