import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Button } from '../src/index'

describe('Button', () => {
    // BlueDarkButton Test
    it('[BlueDarkButton] - it calls "onClick" prop on button click', () => {
        afterEach(cleanup)
        const onClick = jest.fn();
        const { getByText } = render(
            <Button
                variant="BlueDarkButton"
                onClick={onClick}
                disabled={false}
                className="text-white-500">Button testing
            </Button>)

        const text = 'Button testing'
        fireEvent.click(getByText(text));
        expect(onClick).toHaveBeenCalled();
    })

    // RedButton Test
    it('[RedButton] - it calls "onClick" prop on button click', () => {
        afterEach(cleanup)
        const onClick = jest.fn();
        const { getByText } = render(
            <Button
                variant="RedButton"
                onClick={onClick}
                disabled={false}
                className="text-white-500">Button testing
            </Button>)

        const text = 'Button testing'
        fireEvent.click(getByText(text));
        expect(onClick).toHaveBeenCalled();
    })
    // BlueDarkTransparentOutlinedButton Test
    it('[BlueDarkTransparentOutlinedButton] - it calls "onClick" prop on button click', () => {
        afterEach(cleanup)
        const onClick = jest.fn();
        const { getByText } = render(
            <Button
                variant="BlueDarkTransparentOutlinedButton"
                onClick={onClick}
                disabled={false}
                className="text-white-500">Button testing
            </Button>)

        const text = 'Button testing'
        fireEvent.click(getByText(text));
        expect(onClick).toHaveBeenCalled();
    })
    // GreenButton Test
    it('[GreenButton] - it calls "onClick" prop on button click', () => {
        afterEach(cleanup)
        const onClick = jest.fn();
        const { getByText } = render(
            <Button
                variant="GreenButton"
                onClick={onClick}
                disabled={false}
                className="text-white-500">Button testing
            </Button>)

        const text = 'Button testing'
        fireEvent.click(getByText(text));
        expect(onClick).toHaveBeenCalled();
    })
    // BlueLightestOutlinedButton Test
    it('[BlueLightestOutlinedButton] - it calls "onClick" prop on button click', () => {
        afterEach(cleanup)
        const onClick = jest.fn();
        const { getByText } = render(
            <Button
                variant="BlueLightestOutlinedButton"
                onClick={onClick}
                disabled={false}
                className="text-white-500">Button testing
            </Button>)

        const text = 'Button testing'
        fireEvent.click(getByText(text));
        expect(onClick).toHaveBeenCalled();
    })
    // BlueActionButton Test
    it('[BlueActionButton] - it calls "onClick" prop on button click', () => {
        afterEach(cleanup)
        const onClick = jest.fn();
        const { getByText } = render(
            <Button
                variant="BlueActionButton"
                onClick={onClick}
                disabled={false}
                className="text-white-500">Button testing
            </Button>)

        const text = 'Button testing'
        fireEvent.click(getByText(text));
        expect(onClick).toHaveBeenCalled();
    })
})