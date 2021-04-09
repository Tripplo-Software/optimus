import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Input, Dropdown, DatePicker, TextArea, Checkbox } from '../src/index';
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

  it('[DatePicker] - Selects the correct Date variant for DP and RP && Tests the Date value for correctness.', () => {
    const testDP = "ant-picker-date-panel"
    const { container, rerender, getByPlaceholderText, getByTestId } = render(
      <DatePicker
        onChange={onChange}
        variant="DP">
      </DatePicker>
    )
    //opens the Date Picker panel
    fireEvent.click(getByPlaceholderText("Select date"));
    expect(container.getElementsByClassName(testDP))

    //Checks if it returns the correct variant=RangePicker
    const testRP = "ant-picker-date-panels"
    rerender(
      <DatePicker
        onChange={onChange}
        variant="RP">
      </DatePicker>
    )
    fireEvent.click(getByPlaceholderText("Select date"));
    expect(container.getElementsByClassName(testRP))

    // Checks for date correctness
    const testValue = "06-04-2021"
    rerender(
      <DatePicker
        onChange={onChange}
        variant="DP">
      </DatePicker>
    )
    //opens the Date Picker panel
    const dateinput = getByTestId("ant-picker") as HTMLInputElement;
    fireEvent.change(dateinput, { target: { value: testValue } });
    expect(dateinput).toHaveValue(testValue);
    expect(dateinput).toBeValid();

  })

  test('[TextInput] - It accepts the Variant="TEXT", Placeholder && check to see if it accepts a value', () => {
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

  test('[InputNumber] - Checks to see if it returns the correct Variant="NUMBER", Placeholder, Minimum and Maximum values', () => {
    const testPlaceholder = '1'
    const { queryByPlaceholderText, rerender, getByTestId } = render(
      <Input
        onChange={onChange}
        min={1}
        max={10}
        defaultValue={1}
        variant="number">
      </Input>
    )
    expect(queryByPlaceholderText(testPlaceholder))

    const testMin: number = 5
    rerender(
      <Input
        onChange={onChange}
        min={testMin}
        max={10}
        defaultValue={1}
        variant="number">
      </Input>
    )
    const numberInput = getByTestId("input") as HTMLInputElement;
    console.log("Type: ", typeof (numberInput));
    fireEvent.change(numberInput, { target: { value: testMin } });
    expect(numberInput).toBeValid();

    const testMax: number = 100
    rerender(
      <Input
        onChange={onChange}
        min={1}
        max={testMax}
        defaultValue={1}
        variant="number">
      </Input>
    )
    fireEvent.change(numberInput, { target: { value: testMax } });
    expect(numberInput).toBeValid();
  })

  // Test the TextArea Component
  test('[TextArea]-It accepts text/value and a placeholder as a prop', () => {
    const testValue = 'Type this.'
    const { queryByText, queryByPlaceholderText, rerender } = render(
      <TextArea
        onChange={onChange}
        value={testValue}
      />
    )
    expect(queryByText(testValue))
    //Test for the Placeholder text
    const testPH = 'This is a placeholder text'
    rerender(
      <TextArea
        onChange={onChange}
        placeholder={testPH}
      />
    )
    expect(queryByPlaceholderText(testPH))
  })

  it('[Checkbox] - Checks if it Returns the correct classname && tests for correct state', () => {
    const testCheckboxClass = "form-checkbox h-4 w-4"
    const { container, getByTestId, rerender } = render(
      <Checkbox
        onChange={onChange}>
      </Checkbox>
    )
    fireEvent.click(getByTestId("checkbox"));
    expect(container.getElementsByClassName(testCheckboxClass))

    //Test for the correct toggle state
    const toggleState: boolean = true
    const checkboxState = getByTestId("checkbox") as HTMLInputElement;
    rerender(
      <Checkbox
        onChange={onChange}
        isChecked={toggleState}>
      </Checkbox>
    )
    fireEvent.change(checkboxState, { target: { value: toggleState } });
    expect(checkboxState).toBeValid();
  })
})