import React from 'react'
import { Input, Dropdown } from '../src/inputs'
import { Option } from '../src/inputs/dropdown'
export default {
  title: 'Input/Inputs',
}

export const Default = () => <Input placeholder="Enter your message here" />

export const Dropdown_Menu = () => (
  <Dropdown>
    <Option>ZAR-South African Rand</Option>
    <Option>USD-American Dollar</Option>
    <Option>MTN-Mozambican Metical</Option>
    <Option>ZMD-Zimbabwean Dollar</Option>
  </Dropdown>
)
