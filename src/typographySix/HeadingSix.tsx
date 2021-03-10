import React, { FC } from 'react'
import '../index.css'

interface Props {
  className: string
  children: any
}

const HeadingSix: FC<Props> = ({ children, className }: Props) => (
  <h6 className={` ${className} text-xl text-teal font-Arial`}>
    {children}
  </h6>
)

export default HeadingSix
