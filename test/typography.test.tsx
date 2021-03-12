import React from 'react'
import { HeadingOne } from '../src/index'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('Typography', () => {
  it('[HeadingOne] - It matches the Text prop passed to it', () => {
    afterEach(cleanup)

    const { getByText } = render(
      <HeadingOne className="text-green-3000">Hello there</HeadingOne>
    )
  })
})
