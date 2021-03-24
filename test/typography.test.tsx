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
import { Typography } from '../src/index'

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
        const variantTest = "text-6xl text-black font-poppins"
        rerender(<Typography
            variant="HeadingOne"
        >Button testing
            </Typography>)
        expect(container.getElementsByClassName(variantTest))
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
        const variantTest = "text-5xl text-black font-poppins"
        rerender(<Typography
            variant="HeadingTwo"
        >Button testing
            </Typography>)
        expect(container.getElementsByClassName(variantTest))
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
        const variantTest = "text-4xl text-black font-poppins"
        rerender(<Typography
            variant="HeadingThree"
        >Button testing
            </Typography>)
        expect(container.getElementsByClassName(variantTest))
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
        const variantTest = "text-3xl text-black font-poppins"
        rerender(<Typography
            variant="HeadingFour"
        >Button testing
            </Typography>)
        expect(container.getElementsByClassName(variantTest))
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
        const variantTest = "text-2xl text-black font-poppins"
        rerender(<Typography
            variant="HeadingFive"
        >Button testing
            </Typography>)
        expect(container.getElementsByClassName(variantTest))
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
        const variantTest = "text-1xl text-black font-poppins"
        rerender(<Typography
            variant="HeadingSix"
        >Button testing
            </Typography>)
        expect(container.getElementsByClassName(variantTest))
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
        const variantTest = "text-black text-base"
        rerender(<Typography
            variant="BodyText"
        >Button testing
            </Typography>)
        expect(container.getElementsByClassName(variantTest))
    })
    //Link Test
    it('[Link] - It renders the url prop passed to it', () => {
        const link = 'https://www.tripplo.co/'
        const { getByRole, container, rerender } = render(
            <Link
                url={link}
                className="text-black-3000 underline"
            >This is a link</Link>
        )
        //The <a> tag is considered a Role, hence use getByRole.
        expect(getByRole('link')).toHaveAttribute('href', 'https://www.tripplo.co/');
        //Checks if it returns the correct classname based on variant
        const variantTest = "text-black font-poppins no-underline hover:underline hover:text-blue-500"
        rerender(<Typography
            variant="Link"
        >Button testing
        </Typography>)
        expect(container.getElementsByClassName(variantTest))
    })
})