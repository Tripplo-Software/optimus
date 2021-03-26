import React from 'react'
import { Input, Dropdown } from '../src/inputs'

export default {
  title: 'Input/Inputs',
}

export const Default = () => <Input />
export const Dropdown_Menu = () =>
  <Dropdown
  className="border bg-white border-gray-300 w-auto h-auto hover:border-blue-400 rounded font-poppins">
    <option>ZAR-South African Rand</option>
    <option>USD-American Dollar</option>
    <option>MTN-Mozambican Metical</option>
    <option>ZMD-Zimbabwean Dollar</option>
  </Dropdown>
