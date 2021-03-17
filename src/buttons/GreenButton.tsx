import React, { FC } from 'react'
import '../index.css'

export interface Props {
    className: string
    onClick: any
    children: string
    disabled: boolean
}

export const GreenButton: FC<Props> = ({
    className,
    onClick,
    children,
    disabled,
}: Props) => (
    <button
        className={` ${className} bg-green-500 py-2 px-10 rounded font-poppins`}
        onClick={onClick}
        disabled={disabled}
    >
        {children}
    </button>
);