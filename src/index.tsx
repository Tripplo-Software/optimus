import React, { FC, HTMLAttributes, ReactChild } from 'react'
import './index.css'
export interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactChild
}

// Please do not use types off of a default export module or else Storybook Docs will suffer.
// see: https://github.com/storybookjs/storybook/issues/9556
export const Thing: FC<Props> = ({}) => {
  return (
    <div className="bg-blue-500">{`the snozzberries taste like snozzberries`}</div>
  )
}
