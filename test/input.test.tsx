import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Dropdown } from '../src/index';

describe('Dropdown', () => {
  it('Loads the menu and Allows you to select something', () => {
    const { getByLabelText, getByDisplayValue, queryByText, rerender } = render(
      <Dropdown>
        <option>ZAR-South African Rand</option>
        <option>USD-American Dollar</option>
        <option>MTN-Mozambican Metical</option>
        <option>ZMD-Zimbabwean Dollar</option>
      </Dropdown>
    )

    fireEvent.select(getByLabelText('dropdown-menu'), { target: { value: 'USD-American Dollar' } })
    expect(getByDisplayValue('USD-American Dollar'))

    //Check to see if it loads the menu options.
    rerender(<Dropdown>
      <option>ZAR-South African Rand</option>
      <option>USD-American Dollar</option>
      <option>MTN-Mozambican Metical</option>
      <option>ZMD-Zimbabwean Dollar</option>
    </Dropdown>)
    expect(queryByText('MTN-Mozambican Metical'))
  })

})