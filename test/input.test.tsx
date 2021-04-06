import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Input, Dropdown, DatePickerAPI } from '../src/index';
import { Option } from '../src/inputs/dropdown'

function onChange(value: any) {
  console.log(`selected ${value}`)
}

function onBlur() {
  console.log('blur')
}

function onFocus() {
  console.log('focus')
}

function onSearch(val: any) {
  console.log('search:', val)
}

describe('Input Components', () => {
  it('[Dropdown] - Loads the menu and Allows you to select something && Check to see if it loads the menu options.', () => {
    const { getByText, container, queryByText, rerender } = render(
      <Dropdown
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        onSearch={onSearch}>
        <Option value="zar" data-testid="select-option">ZAR-South African Rand</Option>
        <Option value="usd" data-testid="select-option">USD-American Dollar</Option>
        <Option value="mtn" data-testid="select-option">MTN-Mozambican Metical</Option>
        <Option value="zmd" data-testid="select-option">ZMD-Zimbabwean Dollar</Option>
      </Dropdown>
    )
    //opens the Select
    fireEvent.click(getByText("Select an Item"));
    //Checks the container if it container the ant class with Option
    expect(container.getElementsByClassName(".ant-select-selection-item")).toBeInTheDocument

    //Check to see if it loads the menu options.
    rerender(<Dropdown
      onBlur={onBlur}
      onChange={onChange}
      onFocus={onFocus}
      onSearch={onSearch}>
      <Option value="zar" data-testid="select-option">ZAR-South African Rand</Option>
      <Option value="usd" data-testid="select-option">USD-American Dollar</Option>
      <Option value="mtn" data-testid="select-option">MTN-Mozambican Metical</Option>
      <Option value="zmd" data-testid="select-option">ZMD-Zimbabwean Dollar</Option>
    </Dropdown>)
    expect(queryByText('MTN-Mozambican Metical'))
  })

  it('[DatePicker] - Selects the correct Date variant.', () => {
    const testDP = "ant-picker-date-panel"
    const { container, rerender, getByPlaceholderText } = render(
      <DatePickerAPI
        onChange={onChange}
        variant="DP">
      </DatePickerAPI>
    )
    //opens the Date Picker panel
    fireEvent.click(getByPlaceholderText("Select date"));
    expect(container.getElementsByClassName(testDP))
    //Checks if it returns the correct variant
    const testRP = "ant-picker-date-panels"
    rerender(
      <DatePickerAPI
        onChange={onChange}
        variant="RP">
      </DatePickerAPI>)
      fireEvent.click(getByPlaceholderText("Select date"));
    expect(container.getElementsByClassName(testRP))
  })

  test('[Input] - It accepts the placeholder && check to see if it accepts a value', () => {
    const testPlaceholder = 'Type here'
    const { queryByPlaceholderText, queryByText, rerender } = render(
      <Input
        placeholder={testPlaceholder}
        onChange={onChange}
      />
    )
    expect(queryByPlaceholderText(testPlaceholder))

    //Checks to see if it accepts a value.
    rerender(
      <Input
        placeholder={testPlaceholder}
        onChange={onChange}
      />
    )
    expect(queryByText("Typing"))
  })
})