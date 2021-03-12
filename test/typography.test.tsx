import React from 'react'
import {
    HeadingOne,
    HeadingTwo,
    HeadingThree,
    HeadingFour,
    HeadingFive,
    HeadingSix
} from '../src/index'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('Typography', () => {
    // Heading one Test
    it('[HeadingOne] - it matches the Text prop passed to it', () => {
        afterEach(cleanup)

        const { getByText } = render(<HeadingOne className="text-black-3000" >Heading 1 testing</HeadingOne>)

        const text = 'Heading 1 testing'
        expect(getByText(text)).toHaveTextContent(
            'Heading 1 testing'
        )
    })
    // Heading two Test
    it('[HeadingTwo] - it matches the Text prop passed to it', () => {
        afterEach(cleanup)

        const { getByText } = render(<HeadingTwo className="text-black-3000" >Heading 2 testing</HeadingTwo>)

        const text = 'Heading 2 testing'
        expect(getByText(text)).toHaveTextContent(
            'Heading 2 testing'
        )
    })
    // Heading three Test
    it('[HeadingThree] - it matches the Text prop passed to it', () => {
        afterEach(cleanup)

        const { getByText } = render(<HeadingThree className="text-black-3000" >Heading 3 testing</HeadingThree>)

        const text = 'Heading 3 testing'
        expect(getByText(text)).toHaveTextContent(
            'Heading 3 testing'
        )
    })
    //Heeading four Test
    it('[HeadingFour] - it matches the Text prop passed to it', () => {
        afterEach(cleanup)

        const { getByText } = render(<HeadingFour className="text-black-3000" >Heading 4 testing</HeadingFour>)

        const text = 'Heading 4 testing'
        expect(getByText(text)).toHaveTextContent(
            'Heading 4 testing'
        )
    })
    //Heeading five Test
    it('[HeadingFive] - it matches the Text prop passed to it', () => {
        afterEach(cleanup)

        const { getByText } = render(<HeadingFive className="text-black-3000" >Heading 5 testing</HeadingFive>)

        const text = 'Heading 5 testing'
        expect(getByText(text)).toHaveTextContent(
            'Heading 5 testing'
        )
    })
    //Heeading six Test
    it('[HeadingSix] - it matches the Text prop passed to it', () => {
        afterEach(cleanup)

        const { getByText } = render(<HeadingSix className="text-black-3000" >Heading 6 testing</HeadingSix>)

        const text = 'Heading 6 testing'
        expect(getByText(text)).toHaveTextContent(
            'Heading 6 testing'
        )
    })
})