import React from 'react'
import { Input, Dropdown, DatePickerAPI, TextArea } from '../src/inputs'
import { Option } from '../src/inputs/dropdown'
export default {
  title: 'Input/Inputs',
  component: Input, Dropdown, DatePickerAPI
}


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
export const Default = () =>
  <ul>
    <li>
      <b>Text Input</b>{'\u00A0'}
      <Input
        placeholder="Type here"
        onChange={onChange} />
    </li><br />
    <li>
      <b>Number Input</b>{'\u00A0'}
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
      <b>Date Picker</b>{'\u00A0'}
      <DatePickerAPI
        onChange={onChange}>
      </DatePickerAPI>
    </li><br />
    <li>
      <b>Range Picker</b>{'\u00A0'}
      <DatePickerAPI
        onChange={onChange}
        variant="rangePicker">
      </DatePickerAPI>
    </li>
  </ul>
)

export const Text_Area = () =>
  <TextArea
    onChange={onChange}
    placeholder="Enter Text here.."/>
