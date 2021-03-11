import React, { FC } from 'react'
import '../index.css'

interface Props {
  className: string
  children: any
}
const Link: FC<Props> = ({ children, className }: Props) => (
  <a
    href="https://www.tripplo.co/"
    className={` ${className} text-black font-poppins`}
  >
    {children}
  </a>
)

export default Link
