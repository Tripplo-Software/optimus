import React from 'react'
import { Typography } from '../src/typography'

// By passing optional props to this story, you can control the props of the component when
// you consume the story in a test.

export default {
  title: 'Typography/Typography',
  component: Typography,
}
let url: string = 'https://www.tripplo.co/'

export const Heading_1 = () => (
  <Typography variant="HeadingOne">Heading 1</Typography>
)
export const Heading_2 = () => (
  <Typography variant="HeadingTwo">Heading 2</Typography>
)

export const Heading_3 = () => (
  <Typography variant="HeadingThree">Heading 3</Typography>
)

export const Heading_4 = () => (
  <Typography variant="HeadingFour">Heading 4</Typography>
)

export const Heading_5 = () => (
  <Typography variant="HeadingFive">Heading 5</Typography>
)

export const Heading_6 = () => (
  <Typography variant="HeadingSix">Heading 6</Typography>
)

export const BodyText = () => (
  <Typography variant="BodyText">This is a paragraph</Typography>
)

export const LinkText = () => (
  <Typography
    variant="Link"
    href={url}
  >
    This is a link
  </Typography>
)
