import React, { FC, InputHTMLAttributes } from 'react'
import '../../index.css'
export interface Props extends InputHTMLAttributes<HTMLInputElement> {
    className?: string
    placeholder?: string
    value?: string
    onChange: any
}

const TextArea: FC<Props> = ({
    className,
    onChange,
    value,
    placeholder
}: Props) => {
    return (
        <textarea
            className={` ${className} border border-grey font-poppins  py-12 px-16 rounded-sm focus:outline-none `}
            onChange={onChange}
            value={value}
            placeholder={placeholder}
            data-testid="text-area"

        />
    )
}

export default TextArea;