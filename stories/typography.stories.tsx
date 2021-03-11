import React from 'react'
import { HeadingOne, HeadingTwo, HeadingThree, HeadingFour, HeadingFive, HeadingSix, BodyText, Link } from '../src'

export default {
  title: 'Typography',
  component: HeadingOne
}

// By passing optional props to this story, you can control the props of the component when
// you consume the story in a test.
export const Default = () => (
  <HeadingOne className="text-black-500">Heading 1</HeadingOne>
)
export const H2 = () => (
  <HeadingTwo className="text-black-500">HEADING 2</HeadingTwo>
)
export const H3 = () => (
  <HeadingThree className="text-black-500">HEADING 3</HeadingThree>
)
export const H4 = () => (
  <HeadingFour className="text-black-500">HEADING 4</HeadingFour>
)
export const H5 = () => (
  <HeadingFive className="text-black-500">HEADING 5</HeadingFive>
)
export const H6 = () => (
  <HeadingSix className="text-black-500">HEADING 6</HeadingSix>
)
export const Body = () => (
  <BodyText className="text-black-500">This is a paragraph</BodyText>
)
export const LinkText = () => (
  <Link className="text-black-500 no-underline">Click here</Link>
)

