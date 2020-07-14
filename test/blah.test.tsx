import React from 'react'
import { Thing } from '../src/index'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('Thing', () => {
  it('The text matches the prop passed to it', () => {
    afterEach(cleanup)

    //create test children
    // const childern = 'Hush'
    const { getByText } = render(<Thing />)

    const div = 'the snozzberries taste like snozzberries'
    expect(getByText(div)).toHaveTextContent(
      'the snozzberries taste like snozzberries'
    )
    //execute the getByText'
  })
})
