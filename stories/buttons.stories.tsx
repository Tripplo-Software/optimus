import React from 'react'
import { Meta, Story } from '@storybook/react'

import { BlueDarkButton } from '../src/buttons'

const meta: Meta = {
  title: 'Buttons',
}
export default meta

export const Blue: Story = () => (
  <BlueDarkButton
    onClick={() => alert('Button clicked')}
    disabled={false}
    className="text-white-500"
  >
    Button
  </BlueDarkButton>
)
