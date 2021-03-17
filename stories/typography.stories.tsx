import React from 'react'
import {
  HeadingOne,
  HeadingTwo,
  HeadingThree,
  HeadingFour,
  HeadingFive,
  HeadingSix,
  BodyText,
  Link,
} from '../src/typography'

export default {
  title: 'Typography',
}

// By passing optional props to this story, you can control the props of the component when
// you consume the story in a test.
export const Heading_1 = () => (
  <HeadingOne className="text-black-500">Heading 1</HeadingOne>
)
export const Heading_2 = () => (
  <HeadingTwo className="text-black-500">Heading 2</HeadingTwo>
)
export const Heading_3 = () => (
  <HeadingThree className="text-black-500">Heading 3</HeadingThree>
)
export const Heading_4 = () => (
  <HeadingFour className="text-black-500">Heading 4</HeadingFour>
)
export const Heading_5 = () => (
  <HeadingFive className="text-black-500">Heading 5</HeadingFive>
)
export const Heading_6 = () => (
  <HeadingSix className="text-black-500">Heading 6</HeadingSix>
)
export const Body = () => (
  <BodyText className="text-black-500">This is a paragraph</BodyText>
)
let destination: string = "https://www.tripplo.co/";
export const LinkText = () => (
  <Link url={destination} className="text-black-500 underline">This is a link</Link>
)
