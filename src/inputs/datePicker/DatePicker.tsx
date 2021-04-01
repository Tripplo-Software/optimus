import React, { FC } from 'react'
import '../../index.css'
import 'antd/dist/antd.css'
import { DatePicker as DP, Space } from 'antd'
export const { RangePicker } = DP
export interface Props {
    className?: string
    onChange: any
    children: any
    variant?: string
}


const DatePicker: FC<Props> = ({ className, onChange, children, variant }: Props) => (
    <Space
        className={`${className}`}
        direction="vertical"
    >
        {variant==="dp" ? (
             <DP onChange={onChange} />
        ) : (
            children
        )}
    </Space>
)

export default DatePicker;