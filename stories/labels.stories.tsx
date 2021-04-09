import React from 'react'
import { Tag } from '../src/labels'

export default {
    title: 'Labels/Label',
    component: Tag
}

export const SuccessTag = () => (
    <Tag
    variant="SuccessTag"
    >Success!</Tag>
  )

  export const WarningTag = () => (
    <Tag
    variant="WarningTag"
    >Warning</Tag>
  )
  export const DangerTag = () => (
    <Tag
    variant="DangerTag"
    >Danger</Tag>
  )
  export const ActiveTag = () => (
    <Tag
    variant="ActiveTag"
    >Active</Tag>
  )
  export const InactiveTag = () => (
    <Tag
    variant="InactiveTag"
    >Inactive</Tag>
  )
  export const UnknownTag = () => (
    <Tag
    variant="UnknownTag"
    >Unknown</Tag>
  )
  const count: number = 9
  export const CountTag = () => (
    <Tag
    variant="CountTag"
    count={count}
    >{count}</Tag>
  )
