import React from 'react'
import { Input, Dropdown } from '../src/inputs'

export default {
  title: 'Input/Inputs',
}

export const Default = () => <Input
  placeholder="Enter your message here" />
export const Dropdown_Menu = () =>
  <Dropdown>
    <option>ZAR-South African Rand</option>
    <option>USD-American Dollar</option>
    <option>MTN-Mozambican Metical</option>
    <option>ZMD-Zimbabwean Dollar</option>
  </Dropdown>
