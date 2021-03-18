import React, { MouseEvent } from 'react'
import { storiesOf } from "@storybook/react"
import { Meta, Story } from '@storybook/react'

import { Button } from '../src/buttons'

const meta: Meta = {
  title: 'Buttons',
}
export default meta
const onClick = (event: MouseEvent) => {
  event.preventDefault();
  alert(event.currentTarget.tagName + " clicked");
}

export const BlueActionButton: Story = () => (
  <Button
    className="text-white"
    variant="BlueActionButton"
    onClick={onClick}
    disabled={false}>
    +
  </Button>
)
export const BlueDarkButton: Story = () => (
  <Button
    className="text-white"
    variant="BlueDarkButton"
    onClick={onClick}
    disabled={false}>
    Button
  </Button>
)
export const BlueDarkTransparentOutlinedButton: Story = () => (
  <Button
    className="text-white"
    variant="BlueDarkTransparentOutlinedButton"
    onClick={onClick}
    disabled={false}>
    Button
  </Button>
)
export const BlueLightestOutlinedButton: Story = () => (
  <Button
    className="text-white"
    variant="BlueLightestOutlinedButton"
    onClick={onClick}
    disabled={false}>
    Button
  </Button>
)
export const Green_button: Story = () => (
  <Button
    className="text-white"
    variant="GreenButton"
    onClick={onClick}
    disabled={false}>
    Button
  </Button>
)
export const Red_Button: Story = () => (
  <Button
    className="text-white"
    variant="RedButton"
    onClick={onClick}
    disabled={false}>
    Button
  </Button>
)
storiesOf("Blue Action Button", module).add("Default", () => (
  <Button
    variant="BlueActionButton"
    onClick={onClick}
    disabled={false}>
    +
  </Button>
)).add("Large", () => (
  <Button
    variant="BlueActionButton"
    onClick={onClick}
    disabled={false}
    large={true}
  >
    +
  </Button>
)).add("Long", () => (
  <Button
    variant="BlueActionButton"
    onClick={onClick}
    disabled={false}
    long={true}
  >
    +
  </Button>
)).add("Loading", () => (
  <Button
    variant="BlueActionButton"
    onClick={onClick}
    disabled={false}
    large={true}
    isloading={true}
  >
    +
  </Button>
))

//BlueDarkButton stories
storiesOf("Blue Dark Button", module).add("Default", () => (
  <Button
    variant="BlueDarkButton"
    onClick={onClick}
    disabled={false}>
    Button
  </Button>
)).add("Large", () => (
  <Button
    variant="BlueDarkButton"
    onClick={onClick}
    disabled={false}
    large={true}
  >
    Button
  </Button>
)).add("Long", () => (
  <Button
    variant="BlueDarkButton"
    onClick={onClick}
    disabled={false}
    long={true}
  >
    Button
  </Button>
)).add("Loading", () => (
  <Button
    variant="BlueDarkButton"
    onClick={onClick}
    disabled={false}
    large={true}
    isloading={true}
  >
    Button
  </Button>
))