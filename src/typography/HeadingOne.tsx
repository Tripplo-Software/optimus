import React from 'react'
import '../index.css'

export interface Props {
  className: string
}

const defaultProps = {
  className: 'text-5xl text-black font-poppins',
}

const HeadingOne = (props: Props) => <HeadingOne {...props} />

HeadingOne.defaultProps = defaultProps
export default HeadingOne
