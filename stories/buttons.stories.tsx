import React from 'react'
import { Meta, Story } from '@storybook/react'

import {
  BlueDarkButton,
  BlueDarkOutlinedButton,
  RedButton,
  GreenButton
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
// BlueDarkOutlinedButton story
export const Blue_Outlined_Button: Story = () => (
  <BlueDarkOutlinedButton
    onClick={() => alert('Blue Otlined Button clicked')}
    disabled={false}
    className="text-white font-semibold"
  >
    Button
  </BlueDarkOutlinedButton>
)

//GreenButton story
export const Green_Button: Story = () => (
  <GreenButton
    onClick={() => alert('Green Button clicked')}
    disabled={false}
    className="text-white font-bold"
  >
    Button
  </GreenButton>
)
