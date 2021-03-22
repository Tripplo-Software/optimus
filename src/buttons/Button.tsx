import React, { FC } from 'react'
import '../index.css'
// @ts-ignore
import styled, { keyframes } from 'styled-components'
// @ts-ignore
import loadingIcon from '../../assets/icons/loadingIcon.svg';


export interface Props {
  className?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: string;
  disabled: boolean;
  variant: string;
  size: string;
  isloading?: boolean;
}
const animate_loading = keyframes`
  to {
	  transform: rotate(360deg);
  }
`;
const ImageLoading = styled.img`
 display: inline-block;  
 animation: ${animate_loading} 2s  infinite linear;
`;

export const Button: FC<Props> = ({
  className,
  onClick,
  children,
  disabled,
  variant,
  size = 'medium',
  isloading,
}: Props) => {
  const types: any = {
    BlueActionButton: {
      borderColor: '',
      backgroundColor: 'bg-blue-300',
      dimensions: 'py-2 px-4 rounded-lg',
      textUtils: 'text-white font-poppins',
    },
    BlueDarkButton: {
      borderColor: '',
      backgroundColor: 'bg-blue-400',
      dimensions: 'py-2 px-10 rounded',
      textUtils: 'text-white font-poppins',
    },
    BlueDarkTransparentOutlinedButton: {
      borderColor: 'border-2 border-solid border-blue-500',
      backgroundColor: 'bg-transparent',
      dimensions: 'py-2 px-10 rounded',
      textUtils: 'text-blue-400 font-poppins',
    },
    GreenButton: {
      borderColor: '',
      backgroundColor: 'bg-green-300',
      dimensions: 'py-2 px-10 rounded',
      textUtils: 'text-white font-poppins',
    },
    BlueLightestOutlinedButton: {
      borderColor: 'border-2 border-solid border-blue-500',
      backgroundColor: 'bg-blue-100',
      dimensions: 'py-2 px-10 rounded',
      textUtils: 'text-blue-500 font-poppins',
    },
    RedButton: {
      borderColor: '',
      backgroundColor: 'bg-red-300',
      dimensions: 'py-2 px-10 rounded',
      textUtils: 'text-white font-poppins',
    },
  }

  const classNames: string = Object.values(types[variant]).join(' ')

  if (!isloading) {
    if (size === 'large') {
      return (
        <button
          className={` ${className} ${classNames} ${'py-4'} `}
          onClick={onClick}
          disabled={disabled || false}
        >
          {children}
        </button>
      )
    }
    else if (size === 'long') {
      return (
        <button
          className={` ${className} ${classNames} ${'px-16 '}`}
          onClick={onClick}
          disabled={disabled || false}
        >
          {children}
        </button>
      )

    }
    return (
      <button
        className={` ${className} ${classNames} ${'py-2 px-10'}`}
        onClick={onClick}
        disabled={disabled || false}
        value={size || 'medium'}
      >
        {children}
      </button>
    )
  }
  else {
    return (
      <button
        className={` ${className} ${classNames} ${'cursor-wait'}`}
        onClick={onClick}
        disabled={disabled}
        value={size || 'medium'}
      >
        <ImageLoading
          src={loadingIcon}
          alt='loading...' />
      </button>
    )
  }

}
