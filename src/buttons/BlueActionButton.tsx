import React, { FC } from 'react'
import '../index.css'

export interface Props {
  className: string
  onClick: any
  children: string
  disabled: boolean
}

export const BlueActionButton: FC<Props> = ({
  className,
  onClick,
  children,
  disabled,
}: Props) => (
  <button
    className={` ${className} bg-blue-500 text-center py-2 px-4 rounded-lg font-poppins`}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);