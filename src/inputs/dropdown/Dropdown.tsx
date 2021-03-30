import React, { FC } from 'react'
import '../../index.css'
import { Select } from 'antd'
import 'antd/dist/antd.css'
export const { Option } = Select

export interface Props {
  className?: string
  children?: any
  onChange:  any
  onBlur: any
  onFocus: any
  onSearch: any
}

const Dropdown: FC<Props> = ({ children, onBlur, onChange, onFocus, onSearch }: Props) => (
  <Select
     showSearch
    style={{ width: 200 }}
    placeholder="Select the currency"
    optionFilterProp={children}
    onChange={onChange}
    onFocus={onFocus}
    onBlur={onBlur}
    onSearch={onSearch}
    filterOption={(input: string, option: any) =>
      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
  >
    {children}
  </Select>
)

export default Dropdown
