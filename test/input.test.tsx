import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Dropdown, Input } from '../src/index';

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

  test('It accepts the placeholder', () => {
    const testPlaceholder = 'Type here'
    const { queryByPlaceholderText,queryByText,  rerender } = render(
      <Input
        placeholder={testPlaceholder}
      />
    )
    expect(queryByPlaceholderText(testPlaceholder))
    
    //Checks to see if it accepts a value.
    const testValue = 'Testing value'
        rerender(
            <Input
            placeholder={testPlaceholder}
            value={testValue}
            />
        )
        expect(queryByText(testValue))
  })
})