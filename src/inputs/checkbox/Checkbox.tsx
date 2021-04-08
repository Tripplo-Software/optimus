import React, { FC, InputHTMLAttributes } from 'react'
import '../../index.css'

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
    className?: string
    onChange?: any,
    children?: any
    disabled?: boolean,
    isChecked?: boolean
}

const Checkbox: FC<Props> = ({
    className = '',
    onChange,
    children,
    disabled = false,
    isChecked = false
}: Props) => {
    return (
        <label className="inline-flex items-center">
            <input
                className={` ${className} form-checkbox h-4 w-4`}
                onChange={onChange}
                type="checkbox"
                disabled={disabled}
                checked={isChecked}
                data-testid="checkbox"
            />
            <span className="ml-2">{children}</span>
        </label>
    )
}

export default Checkbox;