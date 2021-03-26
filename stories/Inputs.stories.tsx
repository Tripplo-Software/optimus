import React from 'react'
import { Input, Dropdown } from '../src/inputs'

export default {
  title: 'Input/Inputs',
}

export const Default = () => <Input />
export const Dropdown_Menu = () =>
  <Dropdown
  className="border-2 bg-white border-blue-400 rounded font-poppins">
    <option>ZAR-South African Rand</option>
    <option>USD-American Dollar</option>
  </Dropdown>
