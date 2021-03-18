import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Button } from '../src/index'

describe('Button', () => {
    //BlueDarkButton Test
    it('[BlueDarkButton] - it calls "onClick" prop on button click', () => {
        afterEach(cleanup)
        const onClick = jest.fn();
        const { getByText, rerender, container } = render(
            <Button
                variant="BlueDarkButton"
                onClick={onClick}
                disabled={false}
                className="text-white">Button testing
            </Button>)
        const text = 'Button testing'
        fireEvent.click(getByText(text));
        expect(onClick).toHaveBeenCalled();
        //Checks if it returns the correct classname based on variant
        const variantTest = "BlueDarkButton"
        const testClassName = "bg-blue-400 py-2 px- rounded text-white font-poppins"
        rerender(<Button
            variant={variantTest}
            onClick={onClick}
            disabled={false}
            className={testClassName}
        >Button testing
            </Button>)
        expect(container.getElementsByClassName('BlueDarkButton'))
    })

    // RedButton Test
    it('[RedButton] - it calls "onClick" prop on button click', () => {
        afterEach(cleanup)
        const onClick = jest.fn();
        const { getByText, container, rerender } = render(
            <Button
                variant="RedButton"
                onClick={onClick}
                disabled={false}
                className="text-white-500">Button testing
            </Button>)
        fireEvent.click(getByText('Button testing'));
        expect(onClick).toHaveBeenCalled();
        //Checks if it returns the correct classname based on variant
        const variantTest = "RedButton"
        const testClassName = "bg-red-300 py-2 px-10 rounded text-white font-poppins"
        rerender(<Button
            variant={variantTest}
            onClick={onClick}
            disabled={false}
            className={testClassName}
        >Button testing
            </Button>)
        expect(container.getElementsByClassName('RedButton'))
    })
    // BlueDarkTransparentOutlinedButton Test
    it('[BlueDarkTransparentOutlinedButton] - it calls "onClick" prop on button click', () => {
        afterEach(cleanup)
        const onClick = jest.fn();
        const { getByText, container, rerender } = render(
            <Button
                variant="BlueDarkTransparentOutlinedButton"
                onClick={onClick}
                disabled={false}
                className="text-white-500">Button testing
            </Button>)

        const text = 'Button testing'
        fireEvent.click(getByText(text));
        expect(onClick).toHaveBeenCalled();
        //Checks if it returns the correct classname based on variant
        const variantTest = "BlueDarkTransparentOutlinedButton"
        const testClassName = "boder-2 border-solid border-blue-500 bg-transparent py-2 px-10 rounded text-blue-400 font-poppins"
        rerender(<Button
            variant={variantTest}
            onClick={onClick}
            disabled={false}
            className={testClassName}
        >Button testing
            </Button>)
        expect(container.getElementsByClassName('BlueDarkTransparentOutlinedButton'))
    })
    // GreenButton 
    it('[GreenButton] - it calls "onClick" prop on button click', () => {
        afterEach(cleanup)
        const onClick = jest.fn();
        const { getByText, container, rerender } = render(
            <Button
                variant="GreenButton"
                onClick={onClick}
                disabled={false}
                className="text-white-500">Button testing
            </Button>)
        const text = 'Button testing'
        fireEvent.click(getByText(text));
        expect(onClick).toHaveBeenCalled();

        //Checks if it returns the correct classname based on variant
        const variantTest = "BlueDarkButton"
        const testClassName = "bg-green-300 py-2 px-10 rounded text-white font-poppins"
        rerender(<Button
            variant={variantTest}
            onClick={onClick}
            disabled={false}
            className={testClassName}
        >Button testing
            </Button>)
        expect(container.getElementsByClassName('GreenButton'))
    })
    // BlueLightestOutlinedButton Test
    it('[BlueLightestOutlinedButton] - it calls "onClick" prop on button click', () => {
        afterEach(cleanup)
        const onClick = jest.fn();
        const { getByText, container, rerender } = render(
            <Button
                variant="BlueLightestOutlinedButton"
                onClick={onClick}
                disabled={false}
                className="text-white-500">Button testing
            </Button>)
        const text = 'Button testing'
        fireEvent.click(getByText(text));
        expect(onClick).toHaveBeenCalled();
        //Checks if it returns the correct classname based on variant
        const variantTest = "BlueLightestOutlinedButton"
        const testClassName = "border-2 border-solid border-blue-500 bg-blue-100 py-2 px-10 rounded text-blue-500 font-poppins"
        rerender(<Button
            variant={variantTest}
            onClick={onClick}
            disabled={false}
            className={testClassName}
        >Button testing
            </Button>)
        expect(container.getElementsByClassName('RedButton'))
    })
    // BlueActionButton Test
    it('[BlueActionButton] - it calls "onClick" prop on button click', () => {
        afterEach(cleanup)
        const onClick = jest.fn();
        const { getByText, container, rerender } = render(
            <Button
                variant="BlueActionButton"
                onClick={onClick}
                disabled={false}
                className="text-white-500">Button testing
            </Button>)
        const text = 'Button testing'
        fireEvent.click(getByText(text));
        expect(onClick).toHaveBeenCalled();
        //Checks if it returns the correct classname based on variant
        const variantTest = "BlueActionButton"
        const testClassName = "bg-blue-400 py-2 px-4 rounded text-white font-poppins"
        rerender(<Button
            variant={variantTest}
            onClick={onClick}
            disabled={false}
            className={testClassName}
        >Button testing
            </Button>)
        expect(container.getElementsByClassName('BlueActionButton'))
    })
})