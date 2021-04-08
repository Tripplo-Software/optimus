import React, { FC, InputHTMLAttributes } from 'react'
import '../../index.css'

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
    className?: string
    value?: string
    name?: string
    id?: string
    children?: any
    variant: string
}

const Checkbox: FC<Props> = ({
    className,
    variant,
    children,
    ...rest
}: Props) => {
    return (
        <label className="inline-flex items-center">
            <input
                className={` ${className} form-checkbox`}
                type={variant}
                {...rest}
            />
            <span className="ml-2">Placeholder</span>
        </label>
    )
}

export default Checkbox;