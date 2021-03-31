import React, { FC } from 'react'
import '../../index.css'
import 'antd/dist/antd.css'
import {DatePicker as DP, Space} from 'antd'

export interface Props {
    className?: string
    onChange: any
}


const DatePicker: FC<Props> = ({ className, onChange}: Props) => (
    <Space
        className={`${className}`}
        direction="vertical"
    >
        <DP onChange={onChange}/>
    </Space>
)

export default DatePicker;