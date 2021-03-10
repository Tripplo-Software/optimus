import React, { FC } from 'react'
import '../index.css'

interface Props {
    className: string
    children: any
}
const HeadingThree: FC<Props> = ({ children, className }: Props) => (
    <h3 className={` ${className} text-3xl text-blue font-poppins`}>
        {children}
    </h3>
)

export default HeadingThree

