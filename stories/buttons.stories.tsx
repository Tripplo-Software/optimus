import React from 'react'
import { Meta, Story } from '@storybook/react'

import {
  BlueDarkButton,
  RedButton
} from '../src/buttons'

const meta: Meta = {
  title: 'Buttons',
}
export default meta

//BlueDarkButton story
export const Blue_Button: Story = () => (
  <BlueDarkButton
    onClick={() => alert('Blue Button clicked')}
    disabled={false}
    className="text-white font-bold"
  >
    Button
  </BlueDarkButton>
)
// RedButton story
export const Red_Button: Story = () => (
  <RedButton
    onClick={() => alert('Red Button clicked')}
    disabled={false}
    className="text-white font-bold"
  >
    Button
  </RedButton>
)
