import React, { FC } from 'react'
import '../../index.css'
import 'antd/dist/antd.css'
import { InputNumber } from 'antd';

export interface Props {
    className?: string
    children?: any
    onChange: any
    defaultValue?: number
    min: number
    max: number
}

const NumberInput: FC<Props> = ({ className, onChange, defaultValue = 0, min, max }: Props) => (
    <InputNumber
        className={`${className}`}
        data-testid="number-input"
        min={min}
        max={max}
        defaultValue={defaultValue}
        onChange={onChange}
    />
)

export default NumberInput
