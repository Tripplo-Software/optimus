import React, { FC } from 'react'
import '../index.css'

interface Props {
  className: string
  children: any
}

const HeadingFive: FC<Props> = ({ children, className }: Props) => (
  <h5 className={` ${className} text-2xl text-black font-poppins`}>
    {children}
  </h5>
)

export default HeadingFive
