import React, { FC } from 'react'
import '../index.css'

interface Props {
  className: string
  children: any
}

const HeadingTwo: FC<Props> = ({ children, className }: Props) => (
  <h1 className={` ${className} text-6xl text-blue font-poppins`}>
    {children}
  </h1>
)

export default HeadingTwo
