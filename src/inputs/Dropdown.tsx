import React, { FC } from 'react'
import '../index.css'

export interface Props {
    className: string
    children: HTMLElement
}

const Dropdown: FC<Props> = ({ children, className }: Props) => (
    <select
        className={`${className}`}
    >
        {children}
    </select>
)

export default Dropdown;