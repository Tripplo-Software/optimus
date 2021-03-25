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

export const Button: FC<Props> = ({
  className,
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
      width: 'px-12',
    },
    small: {
      height: 'py-1',
      width: 'px-4',
    },
  }


  const selectedDimenison: any = dimensions[size]
  const types: any = {
    BlueActionButton: {
      borderColor: 'border-transparent',
      backgroundColor: 'bg-blue-300',
      dimensions: `${selectedDimenison.height} ${selectedDimenison.width}`,
      textUtils: 'text-white font-poppins border-white rounded-lg',
      hoverState:
        'hover:bg-blue-100 focus:outline-none border-2 hover:border-blue-300 hover:text-blue-400',
    },
    BlueDarkButton: {
      borderColor: 'border-transparent',
      backgroundColor: 'bg-blue-600',
      dimensions: `${selectedDimenison.height} ${selectedDimenison.width}`,
      textUtils: 'text-white font-poppins rounded',
      hoverState:
        'hover:bg-blue-100 focus:outline-none border-2 hover:border-blue-500 hover:text-blue-400',
    },
    BlueDarkTransparentOutlinedButton: {
      borderColor: 'border-2 border-solid border-blue-500',
      backgroundColor: 'bg-transparent',
      dimensions: `${selectedDimenison.height} ${selectedDimenison.width}`,
      textUtils: 'text-blue-400 font-poppins rounded',
      hoverState: 'hover:bg-blue-500 focus:outline-none hover:text-white',
    },
    GreenButton: {
      borderColor: 'border-transparent',
      backgroundColor: 'bg-green-600',
      dimensions: `${selectedDimenison.height} ${selectedDimenison.width}`,
      textUtils: 'text-white font-poppins rounded',
      hoverState:
        'hover:bg-green-100 focus:outline-none border-2 hover:border-green-500 hover:text-green-500',
    },
    BlueLightestOutlinedButton: {
      borderColor: 'border-2 border-solid border-blue-500',
      backgroundColor: 'bg-blue-100',
      dimensions: `${selectedDimenison.height} ${selectedDimenison.width}`,
      textUtils: 'text-blue-500 font-poppins rounded',
      hoverState: 'hover:bg-blue-500 focus:outline-none hover:text-white',
    },
    RedButton: {
      borderColor: 'border-transparent',
      backgroundColor: 'bg-red-600',
      dimensions: `${selectedDimenison.height} ${selectedDimenison.width}`,
      textUtils: 'text-white font-poppins rounded',
      hoverState:
        'hover:bg-red-100 focus:outline-none  border-2 hover:border-red-500 hover:text-red-500',
    },
  }

  const classNames: string = Object.values(types[variant]).join(' ')
  console.log(classNames)

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
