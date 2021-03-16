import React, { FC } from 'react'
import '../index.css'

export interface Props {
  className: string
  onClick: any
  children: string
  disabled: boolean
}

export const BlueDarkButton: FC<Props> = ({
  className,
  onClick,
  children,
  disabled,
}: Props) => (
  <button
    className={` ${className} rounded-lg bg-blue-300`}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
)
