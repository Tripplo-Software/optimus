import React from 'react'
import { Input, Dropdown, DatePicker, TextArea, Checkbox } from '../src/inputs'
import { Option } from '../src/inputs/dropdown'
export default {
  title: 'Input/Inputs',
  component: Input, Dropdown, DatePicker
}


function onChange(value: any) {
  console.log(`selected ${value}`)
}

function handleChange(isChecked: boolean) {
  console.log(`selected ${isChecked}`)
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
export const Default = () =>
  <ul>
    <li>
      <p>
        <b>Text Input</b>
      </p>
      <Input
        placeholder="Type here"
        onChange={onChange} />
    </li><br />
    <li>
      <p>
        <b>Number Input</b>
      </p>
      <Input
        onChange={onChange}
        variant="number"
        defaultValue={0}
        min={1}
        max={10} />
    </li>
  </ul>


export const Dropdown_Menu = () => (
  <Dropdown
    onBlur={onBlur}
    onChange={onChange}
    onFocus={onFocus}
    onSearch={onSearch}
  >
    <Option value="zar">ZAR-South African Rand</Option>
    <Option value="usd">USD-American Dollar</Option>
    <Option value="mtn">MTN-Mozambican Metical</Option>
    <Option value="zmd">ZMD-Zimbabwean Dollar</Option>
  </Dropdown>
)

export const Date_Picker = () => (
  <ul>
    <li>
      <p>
        <b>Date Picker</b>
      </p>
      <DatePicker
        onChange={onChange}>
      </DatePicker>
    </li><br />
    <li>
      <p>
        <b>Range Picker</b>
      </p>
      <DatePicker
        onChange={onChange}
        variant="rangePicker">
      </DatePicker>
    </li>
  </ul>
)

export const Text_Area = () =>
  <div className="container">
    <TextArea
      onChange={onChange}
      placeholder="Enter Text here.." />
  </div>

export const CheckBox = () =>
  <ul>
    <li>
      <p>
        <b>Unchecked</b>
      </p>
      <Checkbox
        variant="checkbox"
        onChange={handleChange}
      >
        Placeholder
    </Checkbox>
    </li><br />
    <li>
      <p>
        <b>Checked</b>
      </p>
      <Checkbox
        variant="checkbox"
        onChange={handleChange}
        isChecked={true}>
        Placeholder
    </Checkbox>
    </li><br />
    <li>
      <p>
        <b>Disabled</b>
      </p>
      <Checkbox
        variant="checkbox"
        disabled={true}>
        Placeholder
    </Checkbox>
    </li>
  </ul>



