import React, { FC } from 'react'
import '../index.css'

export interface Props {
    className?: string
}

const Tag: FC<Props> = ({
    className = '',
}: Props) => {
    return (
        <div className={`${className} text-xs inline-flex items-center font-bold leading-sm px-3 py-1 bg-black text-white rounded-full`}>
            <span>Warning!</span>
            <svg className="h-4 w-4 block sm:inline" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" 
            fill="white"/>
            </svg>
        </div>
    )
}
export default Tag;
