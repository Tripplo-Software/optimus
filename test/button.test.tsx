import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import {
    BlueDarkButton,
    RedButton,
    BlueDarkOutlinedButton
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
            <BlueDarkOutlinedButton
                onClick={onClick}
                disabled={false}
                className="text-white-500">Button testing
            </BlueDarkOutlinedButton>)

        const text = 'Button testing'
        fireEvent.click(getByText(text));
        expect(onClick).toHaveBeenCalled();
    })
})