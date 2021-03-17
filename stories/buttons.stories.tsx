import React from 'react'
import { Meta, Story } from '@storybook/react'

import {
  BlueDarkButton,
  BlueDarkTransparentOutlinedButton,
  BlueLightestOutlinedButton,
  BlueActionButton,
  RedButton,
  GreenButton
} from '../src/buttons'

const meta: Meta = {
  title: 'Buttons',
}
export default meta

//BlueDarkButton story
export const Blue_Dark_Button: Story = () => (
  <BlueDarkButton
    onClick={() => alert('Blue Button clicked')}
    disabled={false}
    className="text-white font-semibold"
  >
    Button
  </BlueDarkButton>
)
// RedButton story
export const Red_Button: Story = () => (
  <RedButton
    onClick={() => alert('Red Button clicked')}
    disabled={false}
    className="text-white font-semibold"
  >
    Button
  </RedButton>
)
// BlueDarkTransparentOutlinedButton story
export const Blue_Transparent_Outlined_Button: Story = () => (
  <BlueDarkTransparentOutlinedButton
    onClick={() => alert('Blue Otlined Button clicked')}
    disabled={false}
    className="text-white font-semibold"
  >
    Button
  </BlueDarkTransparentOutlinedButton>
)

//GreenButton story
export const Green_Button: Story = () => (
  <GreenButton
    onClick={() => alert('Green Button clicked')}
    disabled={false}
    className="text-white font-semibold"
  >
    Button
  </GreenButton>
)
//BlueLightestOutlinedButton story
export const Blue_Lightest_Outlined_Button: Story = () => (
  <BlueLightestOutlinedButton
    onClick={() => alert('Blue Lightest Outline Button clicked')}
    disabled={false}
    className="text-white font-semibold"
  >
    Button
  </BlueLightestOutlinedButton>
)
//BlueActionButton story
export const Blue_Action_Button: Story = () => (
  <BlueActionButton
    onClick={() => alert('Blue Action Button clicked')}
    disabled={false}
    className="text-white font-bold"
  >
    +
  </BlueActionButton>
)
