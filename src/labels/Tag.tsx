import React, { FC } from 'react'
import '../index.css'

export interface Props {
    className?: string
    children?: any
    variant: string,
    count?: number
    isCount?: boolean
}

const Tag: FC<Props> = ({
    className = '',
    children,
    variant,
    isCount = false,
    count = 0
}: Props) => {

    const types: any = {
        SuccessTag: {
            backgroundColor: 'bg-green-300',
            textUtils: 'text-white font-poppins rounded-md',
        },
        WarningTag: {
            backgroundColor: 'bg-yellow-500',
            textUtils: 'text-white font-poppins rounded-md',
        },
        DangerTag: {
            backgroundColor: 'bg-red-300',
            textUtils: 'text-white font-poppins rounded-md',
        },
        ActiveTag: {
            backgroundColor: 'bg-green-300',
            textUtils: 'text-white font-poppins rounded-md',
        },
        InactiveTag: {
            borderColor: 'border border-solid border-red-200',
            backgroundColor: 'bg-transparent',
            textUtils: 'text-gray-300 font-poppins rounded-md',
        },
        UnknownTag: {
            backgroundColor: 'bg-orange-400',
            textUtils: 'text-gray-300 font-poppins rounded-full',
        },
        CountTag: {
            backgroundColor: 'bg-red-200',
            textUtils: 'text-white font-poppins rounded-lg',
        }
    }

    const classNames: string = Object.values(types[variant]).join(' ')

    return (
        <div className={`${className} ${classNames} text-sm inline-flex items-center leading-sm px-3 py-1`}>
            {isCount ? (
                count
            ) : (
                children
            )}
        </div>
    )
}
export default Tag;
