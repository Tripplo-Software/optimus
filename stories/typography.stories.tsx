import React from 'react'
import {
  Typography
} from '../src/typography'
import { storiesOf } from "@storybook/react"

// By passing optional props to this story, you can control the props of the component when
// you consume the story in a test.
// export const Heading_1 = () => (
//   <HeadingOne className="text-black-500">Heading 1</HeadingOne>
// )
storiesOf("Typography", module).add("Default", () => (
  <Typography
    variant="HeadingOne">
      Heading 1
  </Typography>
))

