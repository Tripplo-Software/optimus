import React, { FC } from 'react'
import '../index.css'

export interface Props {
    variant: string;
    className: string;
}

export const Typography: FC<Props> = ({
    variant,
    className
}: Props) => {
    const types: any = {
        HeadingOne: {
           component: 
        },HeadingTwo:{
            component:

        }
    }

    const Component: any = ()=> types[variant].component
    
   return (
<Component 
className={className}
/>
   )



}


