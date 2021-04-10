import React, { FC } from 'react'
import '../index.css'

interface Props {
    className: string
    children: any
}
const HeadingFour: FC<Props> = ({ children, className='' }: Props) => (
    <h4 className={` ${className} text-3xl text-black font-poppins`}>
        {children}
    </h4>
)

export default HeadingFour
