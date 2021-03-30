import React from 'react'
import { Input, Dropdown } from '../src/inputs'
import { Option } from '../src/inputs/dropdown'
export default {
  title: 'Input/Inputs',
}

export const Default = () => <Input placeholder="Enter your message here" />

export const Dropdown_Menu = () => (
  <Dropdown>
    <Option value="zar">ZAR-South African Rand</Option>
    <Option value="usd">USD-American Dollar</Option>
    <Option value="mtn">MTN-Mozambican Metical</Option>
    <Option value="zmd">ZMD-Zimbabwean Dollar</Option>
  </Dropdown>
)
