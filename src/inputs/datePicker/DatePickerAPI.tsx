import React, { FC } from 'react'
import '../../index.css'
import 'antd/dist/antd.css'
import { DatePicker , Space } from 'antd'
const { RangePicker } = DatePicker

export interface Props {
    className?: string
    onChange: any
    children: any
    variant?: string
    format?: string
    value?: any
}


const DatePickerAPI: FC<Props> = ({ className, onChange, variant="datePicker", format="DD/MM/YYYY", value}: Props) => (
    <Space
        className={`${className}`}
        direction="vertical"
    >
        {variant==="rangePicker" ? (
             <RangePicker onChange={onChange} />
        ) : (
           <DatePicker onChange={onChange}
           format={format}
           value={value}
           />
        )}
    </Space>
)

export default DatePickerAPI;