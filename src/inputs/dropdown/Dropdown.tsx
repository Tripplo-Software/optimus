import React, { FC } from 'react'
import '../../index.css'
import { Select } from 'antd';
import 'antd/dist/antd.css';
const { Option } = Select;

export interface Props {
    className?: string
    children?: any
}

function onChange(value: any) {
    console.log(`selected ${value}`);
}

function onBlur() {
    console.log('blur');
}

function onFocus() {
    console.log('focus');
}

function onSearch(val: any) {
    console.log('search:', val);
}

const Dropdown: FC<Props> = ({ children }: Props) => (
    <Select
        showSearch
        style={{ width: 200 }}
        placeholder="Select a person"
        optionFilterProp={children}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onSearch={onSearch}
        filterOption={(input: string, option: any) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
    >
        <Option value="zar">ZAR-South African Rand</Option>
        <Option value="usd">USD-American Dollar</Option>
        <Option value="mtn">MTN-Mozambican Metical</Option>
        <Option value="zmd">ZMD-Zimbabwean Dollar</Option>
    </Select>
)

export default Dropdown;