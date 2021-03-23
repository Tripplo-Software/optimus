import React, { FC } from 'react'
import '../index.css'

export interface Props {
    className?: string;
    variant: string;
    children: string;
}

export const Typography: FC<Props> = ({
    className,
    variant,
    children,
}: Props) => {
    const types: any = {
        HeadingOne: {
            textUtils: 'text-black font-poppins',
        }
    }

    const classNames: string = Object.values(types[variant]).join(' ')

    // switch (variant) {
    //     case 'HeadingOne':
    //             <h1
    //                 className={` ${className} ${classNames}`}
    //             >
    //                 {children}
    //             </h1>
    //             break;
    //     default:
    //         <p className={` ${className} ${classNames}`}>
    //             {children}
    //         </p>

    // }
    if(variant === 'HeadingOne'){
        return (
            <h1
              className={` ${className} ${classNames}`}
            >
                {children}
            </h1>
          )
    }



}


