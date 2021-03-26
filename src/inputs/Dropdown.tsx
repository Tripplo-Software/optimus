import React, { FC } from 'react'
import '../index.css'

export interface Props {
    className?: string
    children: any
}

const Dropdown: FC<Props> = ({ children, className }: Props) => (
    <select
        aria-label='dropdown-menu'
        className={`${className} border bg-white border-gray-300 w-auto p-2 hover:border-blue-400 rounded font-poppins `}
    >
        {children}
    </select>
)

export default Dropdown;