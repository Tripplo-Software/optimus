import React from 'react'
import { Input, Dropdown, DatePicker } from '../src/inputs'
import { Option } from '../src/inputs/dropdown'
import { RangePicker } from '../src/inputs/datePicker'
export default {
  title: 'Input/Inputs',
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
export const Default = () => <Input
  placeholder="Enter your message here"
  onChange={onChange} />

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
      <DatePicker
        onChange={onChange}
        variant="dp">
        <RangePicker />
      </DatePicker>
    </li><br/>
    <li>
      <DatePicker
        onChange={onChange}>
        <RangePicker />
      </DatePicker>
    </li>
  </ul>

)

