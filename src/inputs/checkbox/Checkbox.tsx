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
}: Props) => {
    return (
        <div className="mt-4">
            <label className="inline-flex items-center">
                <input
                    className={` ${className} form-checkbox`}
                    type={variant}
                />
            </label>
        </div>

    )
}

export default Checkbox;