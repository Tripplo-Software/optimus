import React from 'react'
import PropTypes from 'prop-types'
import {BlueDarkButton} from '../src/buttons'

export default {
  title: 'Buttons',
}

export const Default = () => (
  <BlueDarkButton
    onClick={PropTypes.func}
    disabled={false}
    className="text-white-500"
  >
    Button
  </BlueDarkButton>
)