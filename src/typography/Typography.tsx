import React, { FC } from 'react'
import '../index.css'
import HeadingOne from './HeadingOne'
import HeadingTwo from './HeadingTwo'
export interface Props {
  variant: string
  className?: string
}

export const Typography: FC<Props> = ({ variant, className }: Props) => {
  const types: any = {
    HeadingOne: {
      component: HeadingOne,
    },
    HeadingTwo: {
      component: HeadingTwo,
    },
  }

  const Component: any = () => types[variant].component

  return <Component className={className} />
}
