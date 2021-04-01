import React, { FC } from 'react'
import '../../index.css'
import 'antd/dist/antd.css'
import { DatePicker as DP, Space } from 'antd'
const { RangePicker } = DP
export interface Props {
    className?: string
    onChange: any
    children: any
    variant?: string
}


const DatePicker: FC<Props> = ({ className, onChange, variant="datePicker" }: Props) => (
    <Space
        className={`${className}`}
        direction="vertical"
    >
        {variant==="rangePicker" ? (
             <RangePicker onChange={onChange} />
        ) : (
           <DP onChange={onChange}/>
        )}
    </Space>
)

export default DatePicker;