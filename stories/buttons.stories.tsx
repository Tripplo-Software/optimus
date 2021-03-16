import React from 'react'
import PropTypes from 'prop-types'
import { Meta, Story } from '@storybook/react'

import { BlueDarkButton } from '../src/buttons'

const meta: Meta = {
  title: 'Buttons',
}
export default meta

export const Blue: Story = () => (
  <BlueDarkButton
    onClick={() => alert('hi')}
    disabled={false}
    className="text-white-500"
  >
    Button
  </BlueDarkButton>
)
