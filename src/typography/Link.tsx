import React, { FC } from 'react'
import '../index.css'

interface Props {
  className: string
  children: any
  url: string
}
const Link: FC<Props> = ({ children, className, url }: Props) => (
  <a
    href={`${url}`}
    className={` ${className} text-black font-poppins`}
  >
    {children}
  </a>
)

export default Link
