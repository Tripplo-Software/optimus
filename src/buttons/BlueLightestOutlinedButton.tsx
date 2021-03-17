import React, { FC } from 'react'
import '../index.css'

export interface Props {
  className: string
  onClick: any
  children: string
  disabled: boolean
}

export const BlueLightestOutlinedButton: FC<Props> = ({
  className,
  onClick,
  children,
  disabled,
}: Props) => (
  <button
    className={` ${className} border-2 border-solid border-blue-500 text-blue-100 py-2 px-10 rounded`}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);