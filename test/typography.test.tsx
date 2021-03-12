import React from 'react'
import { HeadingOne } from '../src/index'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('Typography', () => {
    it('[HeadingOne] - it matches the Text prop passed to it', () => {
        afterEach(cleanup)

        const { getByText } = render(<HeadingOne className="text-green-3000" >Heading 1 testing</HeadingOne>)

        const text = 'Heading 1 testing'
        expect(getByText(text)).toHaveTextContent(
            'Heading 1 testing'
        )
    })
})