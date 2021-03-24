import React, { FC } from 'react'
import '../index.css'
// @ts-ignore
import styled, { keyframes } from 'styled-components'
// @ts-ignore
import { LoadingSpinner } from '../../assets/icons'
export interface Props {
  className?: string
  onClick: React.MouseEventHandler<HTMLButtonElement>
  children: string
  disabled: boolean
  variant: string
  size: string
  isloading?: boolean
}
const animate_loading = keyframes`
  to {
	  transform: rotate(360deg);
  }
`
const ImageLoading = styled.div`
  display: inline-block;
  animation: ${animate_loading} 2s infinite linear;
`

export const Button: FC<Props> = ({
  className,
  onClick,
  children,
  disabled,
  variant,
  size = 'medium',
  isloading,
}: Props) => {
  const dimensions = {
    regular: {
      height: 'py-2',
      width: 'px-4',
    },
    square: {
      height: 'py-2',
      width: 'px-1',
    },
    long: {
      height: 'py-2',
      width: 'px-6',
    },
    small: {
      height: 'py-2',
      width: 'px-2',
    },
  }
  const types: any = {
    BlueActionButton: {
      borderColor: 'border-white',
      backgroundColor: 'bg-blue-300',
      dimensions: 'py-2 border-white px-4 rounded-lg',
      textUtils: 'text-white font-poppins',
      hoverState:
        'hover:bg-blue-100 focus:outline-none border-2 hover:border-blue-300 hover:text-blue-400',
    },
    BlueDarkButton: {
      borderColor: 'border-white',
      backgroundColor: 'bg-blue-400',
      dimensions: 'py-2 px-10 rounded',
      textUtils: 'text-white font-poppins',
      hoverState:
        'hover:bg-blue-100 focus:outline-none border-2 hover:border-blue-500 hover:text-blue-400',
    },
    BlueDarkTransparentOutlinedButton: {
      borderColor: 'border-2 border-solid border-blue-500',
      backgroundColor: 'bg-transparent',
      dimensions: 'py-2 px-10 rounded',
      textUtils: 'text-blue-400 font-poppins',
      hoverState: 'hover:bg-blue-500 focus:outline-none hover:text-white',
    },
    GreenButton: {
      borderColor: 'border-white',
      backgroundColor: 'bg-green-300',
      dimensions: 'py-2 px-10 rounded',
      textUtils: 'text-white font-poppins',
      hoverState:
        'hover:bg-green-100 focus:outline-none border-2 hover:border-green-500 hover:text-green-500',
    },
    BlueLightestOutlinedButton: {
      borderColor: 'border-2 border-solid border-blue-500',
      backgroundColor: 'bg-blue-100',
      dimensions: 'py-2 px-10 rounded',
      textUtils: 'text-blue-500 font-poppins',
      hoverState: 'hover:bg-blue-300 focus:outline-none hover:text-white',
    },
    RedButton: {
      borderColor: 'border-white',
      backgroundColor: 'bg-red-300',
      dimensions: 'py-2 px-10 rounded',
      textUtils: 'text-white font-poppins',
      hoverState:
        'hover:bg-red-100 focus:outline-none  border-2 hover:border-red-500 hover:text-red-500',
    },
  }

  const classNames: string = Object.values(types[variant]).join(' ')
  console.log(classNames)

  return (
    <button
      className={` ${className} ${classNames} cursor-wait`}
      onClick={onClick}
      disabled={disabled}
      value={size || 'medium'}
    >
      {isloading ? (
        <ImageLoading>
          <LoadingSpinner />
        </ImageLoading>
      ) : (
        children
      )}
    </button>
  )
}
