import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import {
    BlueDarkButton,
    BlueDarkTransparentOutlinedButton,
    BlueLightestOutlinedButton,
    RedButton,
    GreenButton
} from '../src/index'

describe('Button', () => {
    // BlueDarkButton Test
    it('[BlueDarkButton] - it calls "onClick" prop on button click', () => {
        afterEach(cleanup)
        const onClick = jest.fn();
        const { getByText } = render(
            <BlueDarkButton
                onClick={onClick}
                disabled={false}
                className="text-white-500">Button testing
            </BlueDarkButton>)

        const text = 'Button testing'
        fireEvent.click(getByText(text));
        expect(onClick).toHaveBeenCalled();
    })

    // RedButton Test
    it('[RedButton] - it calls "onClick" prop on button click', () => {
        afterEach(cleanup)
        const onClick = jest.fn();
        const { getByText } = render(
            <RedButton
                onClick={onClick}
                disabled={false}
                className="text-white-500">Button testing
            </RedButton>)

        const text = 'Button testing'
        fireEvent.click(getByText(text));
        expect(onClick).toHaveBeenCalled();
    })
    // BlueDarkOutlinedButton Test
    it('[BlueDarkOutlinedButton] - it calls "onClick" prop on button click', () => {
        afterEach(cleanup)
        const onClick = jest.fn();
        const { getByText } = render(
            <BlueDarkTransparentOutlinedButton
                onClick={onClick}
                disabled={false}
                className="text-white-500">Button testing
            </BlueDarkTransparentOutlinedButton>)

        const text = 'Button testing'
        fireEvent.click(getByText(text));
        expect(onClick).toHaveBeenCalled();
    })
    // GreenButton Test
    it('[GreenButton] - it calls "onClick" prop on button click', () => {
        afterEach(cleanup)
        const onClick = jest.fn();
        const { getByText } = render(
            <GreenButton
                onClick={onClick}
                disabled={false}
                className="text-white-500">Button testing
            </GreenButton>)

        const text = 'Button testing'
        fireEvent.click(getByText(text));
        expect(onClick).toHaveBeenCalled();
    })
    // BlueLightestOutlinedButton Test
    it('[BlueLightestOutlinedButton] - it calls "onClick" prop on button click', () => {
        afterEach(cleanup)
        const onClick = jest.fn();
        const { getByText } = render(
            <BlueLightestOutlinedButton
                onClick={onClick}
                disabled={false}
                className="text-white-500">Button testing
            </BlueLightestOutlinedButton>)

        const text = 'Button testing'
        fireEvent.click(getByText(text));
        expect(onClick).toHaveBeenCalled();
    })
})