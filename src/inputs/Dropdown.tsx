import React, { FC } from 'react'
import '../index.css'

export interface Props {
    className: string
    children: string
}

const Dropdown: FC<Props> = ({ children, className }: Props) => (
    <select
        className={`${className}`}
    >
        {children}
    </select>
)

export default Dropdown