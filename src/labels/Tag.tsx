import React, { FC } from 'react'
import '../index.css'

export interface Props {
    className?: string
    children?: any
    variant: string,
}

const Tag: FC<Props> = ({
    className = '',
    children,
    variant,
}: Props) => {

    const types: any = {
        SuccessTag: {
            backgroundColor: 'bg-green-300',
            textUtils: 'text-white font-poppins rounded-lg',
        },
        WarningTag: {
            backgroundColor: 'bg-yellow-600',
            textUtils: 'text-white font-poppins rounded-lg',
        },
        DangerTag: {
            backgroundColor: 'bg-red-300',
            textUtils: 'text-white font-poppins rounded-lg',
        },
        ActiveTag:{
            backgroundColor: 'bg-green-300',
            textUtils: 'text-white font-poppins rounded-lg',
        },
        InactiveTag:{
            borderColor: 'border border-solid border-red-200',
            backgroundColor: 'bg-transparent',
            textUtils: 'text-gray-300 font-poppins rounded-lg',
        }
    }

    const classNames: string = Object.values(types[variant]).join(' ')

    return (
        <div className={`${className} ${classNames} text-md inline-flex items-space-between leading-sm px-3 py-1 text-white`}>
            {children}
        </div>
    )
}
export default Tag;
