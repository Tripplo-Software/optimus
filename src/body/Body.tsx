import React, { FC } from 'react'
import '../index.css'

export interface Props {
    className: string
    children: any
}

const Body: FC<Props> = ({ children, className }: Props) => (
    <p className={` ${className} text-black-700 text-opacity-75`}>
        {children}
    </p>
)

export default Body