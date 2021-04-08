import React, { FC } from 'react'
import '../../index.css'
import { Select } from 'antd'
import 'antd/dist/antd.css'
export const { Option } = Select

export interface Props {
    className?: string
    children?: any
    onChange: any
    onBlur: any
    onFocus: any
    onSearch: any
    placeholder?: string
}

const Dropdown: FC<Props> = ({ className='', children, onBlur, onChange, onFocus, onSearch }: Props) => (
    <Select
        virtual={false}
        defaultValue="Select an Item"
        className={`${className}`}
        showSearch
        style={{ width: 200 }}
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
