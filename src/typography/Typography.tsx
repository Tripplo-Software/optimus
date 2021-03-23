import React, { FC } from 'react'
import '../index.css'
import HeadingOne from './HeadingOne'
import HeadingTwo from './HeadingTwo'
import HeadingThree from './HeadingThree'
import HeadingFour from './HeadingFour'
import HeadingFive from './HeadingFive'
import HeadingSix from './HeadingSix'
import BodyText from './BodyText'
import Link from './Link'
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
    HeadingThree: {
      component: HeadingThree,
    },
    HeadingFour: {
      component: HeadingFour,
    },
    HeadingFive: {
      component: HeadingFive,
    },HeadingSix: {
      component: HeadingSix,
    },
    BodyText: {
      component: BodyText,
    },
    Link: {
      component: Link,
    },
  }

  const Component: any = types[variant].component
  const Child = () => <Component
  className={`${className}`}
  >{children}</Component>
  return <Child />
}

/**
 *  finsh up the typograph + its test
 *  make sure that when you run tsdx build it works
 *
 *
 * */
