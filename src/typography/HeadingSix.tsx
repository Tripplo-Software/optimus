import React, { FC } from 'react'
import '../index.css'

interface Props {
  className: string
  children: any
}

const HeadingSix: FC<Props> = ({ children, className='' }: Props) => (
  <h6 className={` ${className} text-1xl text-black font-poppins`}>
    {children}
  </h6>
)

export default HeadingSix
