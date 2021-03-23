import React from 'react'
import {
    HeadingOne,
    HeadingTwo,
    HeadingThree,
    HeadingFour,
    HeadingFive,
    HeadingSix,
    BodyText,
    Link
} from '../src/index'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import {Typography} from '../src/index'

describe('Typography', () => {
    // Heading one Test
    it('[HeadingOne] - it matches the Text prop passed to it', () => {
        afterEach(cleanup)

        const { getByText, container, rerender } = render(<HeadingOne className="text-black-3000" >Heading 1 testing</HeadingOne>)

        const text = 'Heading 1 testing'
        expect(getByText(text)).toHaveTextContent(
            'Heading 1 testing'
        )
        //Checks if it returns the correct classname based on variant
        const variantTest = "HeadingOne"
        rerender(<Typography
            variant={variantTest}
        >Button testing
            </Typography>)
        expect(container.getElementsByClassName('HeadingOne'))
    })
    // Heading two Test
    it('[HeadingTwo] - it matches the Text prop passed to it', () => {
        afterEach(cleanup)

        const { getByText, container, rerender } = render(<HeadingTwo className="text-black-3000" >Heading 2 testing</HeadingTwo>)

        const text = 'Heading 2 testing'
        expect(getByText(text)).toHaveTextContent(
            'Heading 2 testing'
        )
        //Checks if it returns the correct classname based on variant
        const variantTest = "HeadingTwo"
        rerender(<Typography
            variant={variantTest}
        >Button testing
            </Typography>)
        expect(container.getElementsByClassName('HeadingTwo'))
    })
    // Heading three Test
    it('[HeadingThree] - it matches the Text prop passed to it', () => {
        afterEach(cleanup)

        const { getByText, container, rerender } = render(<HeadingThree className="text-black-3000" >Heading 3 testing</HeadingThree>)

        const text = 'Heading 3 testing'
        expect(getByText(text)).toHaveTextContent(
            'Heading 3 testing'
        )
        //Checks if it returns the correct classname based on variant
        const variantTest = "HeadingThree"
        rerender(<Typography
            variant={variantTest}
        >Button testing
            </Typography>)
        expect(container.getElementsByClassName('HeadingThree'))
    })
    //Heading four Test
    it('[HeadingFour] - it matches the Text prop passed to it', () => {
        afterEach(cleanup)

        const { getByText, container, rerender } = render(<HeadingFour className="text-black-3000" >Heading 4 testing</HeadingFour>)

        const text = 'Heading 4 testing'
        expect(getByText(text)).toHaveTextContent(
            'Heading 4 testing'
        )
        //Checks if it returns the correct classname based on variant
        const variantTest = "HeadingFour"
        rerender(<Typography
            variant={variantTest}
        >Button testing
            </Typography>)
        expect(container.getElementsByClassName('HeadingFour'))
    })
    //Heading five Test
    it('[HeadingFive] - it matches the Text prop passed to it', () => {
        afterEach(cleanup)

        const { getByText, container, rerender } = render(<HeadingFive className="text-black-3000" >Heading 5 testing</HeadingFive>)

        const text = 'Heading 5 testing'
        expect(getByText(text)).toHaveTextContent(
            'Heading 5 testing'
        )
        //Checks if it returns the correct classname based on variant
        const variantTest = "HeadingFive"
        rerender(<Typography
            variant={variantTest}
        >Button testing
            </Typography>)
        expect(container.getElementsByClassName('HeadingFive'))
    })
    //Heading six Test
    it('[HeadingSix] - it matches the Text prop passed to it', () => {
        afterEach(cleanup)

        const { getByText, container, rerender } = render(<HeadingSix className="text-black-3000" >Heading 6 testing</HeadingSix>)

        const text = 'Heading 6 testing'
        expect(getByText(text)).toHaveTextContent(
            'Heading 6 testing'
        )
        //Checks if it returns the correct classname based on variant
        const variantTest = "HeadingSix"
        rerender(<Typography
            variant={variantTest}
        >Button testing
            </Typography>)
        expect(container.getElementsByClassName('HeadingSix'))
    })
    //Body Text Test
    it('[BodyText] - it matches the Text prop passed to it', () => {
        afterEach(cleanup)

        const { getByText, container, rerender } = render(<BodyText className="text-black-3000" >Body Text testing</BodyText>)

        const text = 'Body Text testing'
        expect(getByText(text)).toHaveTextContent(
            'Body Text testing'
        )
        //Checks if it returns the correct classname based on variant
        const variantTest = "BodyText"
        rerender(<Typography
            variant={variantTest}
        >Button testing
            </Typography>)
        expect(container.getElementsByClassName('BodyText'))
    })
    //Link Test
    it('[Link] - It renders the url prop passed to it', () => {
        const link = 'https://www.tripplo.co/'
        const { getByRole } = render(
            <Link
                url={link}
                className="text-black-3000 underline"
            >This is a link</Link>
        )
        //The <a> tag is considered a Role, hence use getByRole.
        expect(getByRole('link')).toHaveAttribute('href', 'https://www.tripplo.co/');
    })
})