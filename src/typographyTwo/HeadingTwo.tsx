import React, { FC } from 'react'
import '../index.css'

interface Props {
  className: string
  children: any
}

const HeadingTwo: FC<Props> = ({ children, className }: Props) => (
  <h2 className={` ${className} text-4xl text-blue font-poppins`}>
    {children}
  </h2>
)

export default HeadingTwo
