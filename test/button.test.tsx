import React from 'react'
import {
    BlueDarkButton
} from '../src/index'
import { render, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

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
})