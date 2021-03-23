import React, { FC } from 'react'
import '../index.css'
import HeadingOne from './HeadingOne'
import HeadingTwo from './HeadingTwo'
export interface Props {
  variant: string
  className?: string
  children: any
}

export const Typography: FC<Props> = ({
  variant,
  className,
  children,
}: Props) => {
  const types: any = {
    HeadingOne: {
      component: HeadingOne,
    },
    HeadingTwo: {
      component: HeadingTwo,
    },
  }

  const Component: any = types[variant].component
  const Child = () => <Component>{children}</Component>
  console.log('Component', Component, className)
  return <Child />
}

/**
 *  finsh up the typograph + its test
 *  make sure that when you run tsdx build it works
 *
 *
 * */
