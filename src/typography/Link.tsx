import React, { FC } from 'react'
import '../index.css'

interface Props {
  className: string
  children: any
  to: string
}
const Link: FC<Props> = ({ children, className, to }: Props) => (
  <a
    href={`${to}`}
    className={` ${className} text-black font-poppins`}
  >
    {children}
  </a>
)

export default Link
