import React from 'react'
import '../index.css'

export interface Props {
  className: string
}

const defaultProps = {
  className: 'text-5xl text-black font-poppins',
}

const HeadingOne = (props: Props, children: any) => (
  <h1 {...props}>{children}</h1>
)

HeadingOne.defaultProps = defaultProps
export default HeadingOne
