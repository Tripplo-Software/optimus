import React, { FC } from 'react'
import '../index.css'

export interface Props {
  className: string
  onClick: any
  children: string
  disabled: boolean
}

export const BlueDarkOutlinedButton: FC<Props> = ({
  className,
  onClick,
  children,
  disabled,
}: Props) => (
  <button
    className={` ${className} border-2 border-solid bg-transparent bg-blue-500 py-2 px-10 rounded`}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
)