import React, { FC } from 'react'
import '../index.css'

export interface Props {
  className: string
  onClick: any
  children: string
  disabled: boolean
  variant: string
}

export const Button: FC<Props> = ({
  className,
  onClick,
  children,
  disabled,
  variant,
}: Props) => {
  const types: any = {
    BlueDarkTransparentOutlined: {
      borderColor: 'border-2 border-solid border-blue-500',
      backgroundColor: 'bg-transparent',
      dimensions: 'py-2 px-10',
      textUtils: 'text-blue-500 font-poppins',
    },
    BlueAction: {
      borderColor: 'red',
      backgroundColor: 'bg-green-500',
    },
    GreenButton: {
      borderColor: '',
      backgroundColor: 'bg-green-500',
      dimensions: 'py-2 px-10',
      textUtils: 'text-white font-poppins',
    },
  }

  const classNames: string = Object.values(types[variant]).join(' ')

  return (
    <button
      className={` ${className} ${classNames}`}
      onClick={onClick}
      disabled={disabled || false}
    >
      {children}
    </button>
  )
}
