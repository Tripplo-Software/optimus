import React from 'react'
import { Meta, Story } from '@storybook/react'

import {
  Button
} from '../src/buttons'

const meta: Meta = {
  title: 'Buttons',
}
export default meta

export const BlueActionButton: Story = () => (
  <Button
    className="text-white"
    variant="BlueActionButton"
    onClick={() => alert('Action Button clicked')}
    disabled={false}>
    +
  </Button>
)
export const BlueDarkButton: Story = () => (
  <Button
    className="text-white"
    variant="BlueDarkButton"
    onClick={() => alert('Blue Dark Button clicked')}
    disabled={false}>
    Button
  </Button>
)
export const BlueDarkTransparentOutlinedButton: Story = () => (
  <Button
    className="text-white"
    variant="BlueDarkTransparentOutlinedButton"
    onClick={() => alert('Blue Dark Trans Button clicked')}
    disabled={false}>
    Button
  </Button>
)
export const BlueLightestOutlinedButton: Story = () => (
  <Button
    className="text-white"
    variant="BlueLightestOutlinedButton"
    onClick={() => alert('Blue Lightest Outlined Button clicked')}
    disabled={false}>
    Button
  </Button>
)
export const Green_button: Story = () => (
  <Button
    className="text-white"
    variant="GreenButton"
    onClick={() => alert('Green Button clicked')}
    disabled={false}>
    Button
  </Button>
)
export const Red_Button: Story = () => (
  <Button
    className="text-white"
    variant="RedButton"
    onClick={() => alert('Red Button clicked')}
    disabled={false}>
    Button
  </Button>
)