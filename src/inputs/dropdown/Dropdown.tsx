import React, { FC } from 'react'
import '../../index.css'
import { Select } from 'antd';
import 'antd/dist/antd.css';
// const { Option } = Select;

const { Option } = Select;

// const children = [];
// for (let i = 10; i < 36; i++) {
//   children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
// }

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

export default Dropdown;