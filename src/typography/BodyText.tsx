import React, { FC } from 'react'
import '../index.css'

export interface Props {
    className: string
    children: any
}

const BodyText: FC<Props> = ({ children, className }: Props) => (
    <p className={` ${className} text-black-700 h-text-base`}>
        {children}
    </p>
)

export default BodyText