import React, { FC } from 'react'
import '../index.css'
// @ts-ignore
import styled, { keyframes } from 'styled-components'
import { LoadingSpinner } from '../../assets/icons'
export interface Props {
  className?: string
  onClick: React.MouseEventHandler<HTMLButtonElement>
  children: string
  disabled: boolean
  variant: string
  size?: string
  isloading?: boolean
}
const animate_loading = keyframes`
  to {
	  transform: rotate(360deg);
  }
`
const ImageLoading = styled.div`
  display: flex;
  animation: ${animate_loading} 2s infinite linear;
`

const Button: FC<Props> = ({
  className='',
  onClick,
  children,
  disabled,
  variant,
  size = 'regular',
  isloading,
}: Props) => {
  const dimensions: any = {
    regular: {
      height: 'py-2',
      width: 'px-8',
    },
    square: {
      height: 'py-2',
      width: 'px-4',
    },
    long: {
      height: 'py-2',
      width: 'px-16',
    },
    small: {
      height: 'py-1',
      width: 'px-4',
    },
  }

  const selectedDimension: any = dimensions[size]


  const types: any = {
    BlueActionButton: {
      borderColor: 'border-transparent',
      backgroundColor: 'bg-blue-300',
      dimensions: `${selectedDimension.height} ${selectedDimension.width}`,
      textUtils: 'text-white font-poppins border-white rounded-lg',
      hoverState:
        'hover:bg-blue-100 focus:outline-none border hover:border-blue-300 hover:text-blue-300',
    },
    BlueDarkButton: {
      borderColor: 'border-transparent',
      backgroundColor: 'bg-blue-400',
      dimensions: `${selectedDimension.height} ${selectedDimension.width}`,
      textUtils: 'text-white font-poppins rounded',
      hoverState:
        'hover:bg-blue-100 focus:outline-none border hover:border-blue-400 hover:text-blue-400',
    },
    BlueDarkTransparentOutlinedButton: {
      borderColor: 'border border-solid border-blue-400',
      backgroundColor: 'bg-transparent',
      dimensions: `${selectedDimension.height} ${selectedDimension.width}`,
      textUtils: 'text-blue-400 font-poppins rounded',
      hoverState: 'hover:bg-blue-400 focus:outline-none hover:text-white',
    },
    GreenButton: {
      borderColor: 'border-transparent',
      backgroundColor: 'bg-green-300',
      dimensions: `${selectedDimension.height} ${selectedDimension.width}`,
      textUtils: 'text-white font-poppins rounded',
      hoverState:
        'hover:bg-transparent focus:outline-none border hover:border-green-300 hover:text-green-300',
    },
    BlueLightestOutlinedButton: {
      borderColor: 'border border-solid border-blue-300',
      backgroundColor: 'bg-blue-100',
      dimensions: `${selectedDimension.height} ${selectedDimension.width}`,
      textUtils: 'text-blue-300 font-poppins rounded',
      hoverState: 'hover:bg-blue-300 focus:outline-none hover:text-white',
    },
    RedButton: {
      borderColor: 'border-transparent',
      backgroundColor: 'bg-red-300',
      dimensions: `${selectedDimension.height} ${selectedDimension.width}`,
      textUtils: 'text-white font-poppins rounded',
      hoverState:
        'hover:bg-transparent focus:outline-none  border hover:border-red-300 hover:text-red-300',
    },
  }

  const classNames: string = Object.values(types[variant]).join(' ')
  return (
    <button
      className={` ${className} ${classNames}`}
      onClick={onClick}
      disabled={disabled}
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

export default Button
