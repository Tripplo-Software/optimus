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
    className={` ${className} border-2 border-solid bg-blue-400`}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
)
