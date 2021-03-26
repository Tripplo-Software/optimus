import React, { FC } from 'react'
import '../index.css'

export interface Props {
    className: string
    children: HTMLAreaElement
}

const Dropdown: FC<Props> = ({ children, className }: Props) => (
    <select
        className={`${className}`}
        placeholder=""
    >
        {children}
    </select>
)

export default Dropdown;