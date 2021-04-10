import React, { FC } from 'react'
import '../../index.css'
import 'antd/dist/antd.css'
import { DatePicker as Dpicker, Space } from 'antd'
const { RangePicker } = Dpicker

export interface Props {
    className?: string
    onChange: any
    children: any
    variant?: string
    format?: string
    value?: any
}


const DatePicker: FC<Props> = ({ className='', onChange, variant = "datePicker", format = "DD/MM/YYYY", value }: Props) => (
    <Space
        className={`${className}`}
        direction="vertical"
    >
        {variant === "rangePicker" ? (
            <RangePicker onChange={onChange} />
        ) : (
            <Dpicker onChange={onChange}
                format={format}
                value={value}
                data-testid="ant-picker"
            />
        )}
    </Space>
)

export default DatePicker;