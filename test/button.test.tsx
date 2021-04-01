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
                size="regular"
            >Button testing
            </Button>)
        const text = 'Button testing'
        fireEvent.click(getByText(text));
        expect(onClick).toHaveBeenCalled();
        //Checks if it returns the correct classname based on variant
        const testClassName = "border-white bg-blue-400 py-2 px-10 rounded text-white font-poppins hover:bg-blue-100 focus:outline-none border-2 hover:border-blue-500 hover:text-blue-400"
        rerender(<Button
            variant="BlueDarkButton"
            onClick={onClick}
            disabled={false}
            size="regular"
            className={testClassName}
        >Button testing
            </Button>)
        expect(container.getElementsByClassName(testClassName))
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
                size="regular"
                className="text-white-500">Button testing
            </Button>)
        fireEvent.click(getByText('Button testing'));
        expect(onClick).toHaveBeenCalled();
        //Checks if it returns the correct classname based on variant
        const testClassName = "border-white bg-red-300 py-2 px-10 rounded text-white font-poppins hover:bg-red-100 focus:outline-none  border-2 hover:border-red-500 hover:text-red-500"
        rerender(<Button
            variant="RedButton"
            onClick={onClick}
            disabled={false}
            size="regular"
            className={testClassName}
        >Button testing
            </Button>)
        expect(container.getElementsByClassName(testClassName))
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
                size="regular"
            >Button testing
            </Button>)

        const text = 'Button testing'
        fireEvent.click(getByText(text));
        expect(onClick).toHaveBeenCalled();
        //Checks if it returns the correct classname based on variant
        const testClassName = "boder-2 border-solid border-blue-500 bg-transparent py-2 px-10 rounded text-blue-400 font-poppins hover:bg-blue-500 focus:outline-none hover:text-white"
        rerender(<Button
            variant="BlueDarkTransparentOutlinedButton"
            onClick={onClick}
            disabled={false}
            size="regular"
            className={testClassName}
        >Button testing
            </Button>)
        expect(container.getElementsByClassName(testClassName))
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
                size="regular"
            >Button testing
            </Button>)
        const text = 'Button testing'
        fireEvent.click(getByText(text));
        expect(onClick).toHaveBeenCalled();

        //Checks if it returns the correct classname based on variant
        const testClassName = "border-white bg-green-300 py-2 px-10 rounded text-white font-poppins hover:bg-green-100 focus:outline-none border-2 hover:border-green-500 hover:text-green-500"
        rerender(<Button
            variant="BlueDarkButton"
            onClick={onClick}
            disabled={false}
            size="regular"
            className={testClassName}
        >Button testing
            </Button>)
        expect(container.getElementsByClassName(testClassName))
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
                size="regular"
            >Button testing
            </Button>)
        const text = 'Button testing'
        fireEvent.click(getByText(text));
        expect(onClick).toHaveBeenCalled();
        //Checks if it returns the correct classname based on variant
        const testClassName = "border-2 border-solid border-blue-500 bg-blue-100 py-2 px-10 rounded text-blue-500 font-poppins hover:bg-blue-300 focus:outline-none hover:text-white"
        rerender(<Button
            variant="BlueLightestOutlinedButton"
            onClick={onClick}
            disabled={false}
            size="regular"
            className={testClassName}
        >Button testing
            </Button>)
        expect(container.getElementsByClassName(testClassName))
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
                size="regular"
            >Button testing
            </Button>)
        const text = 'Button testing'
        fireEvent.click(getByText(text));
        expect(onClick).toHaveBeenCalled();
        //Checks if it returns the correct classname based on variant
        const testClassName = "border-white bg-blue-300 py-2 px-4 rounded-lg text-white font-poppins hover:bg-blue-100 focus:outline-none border-2 hover:border-blue-300 hover:text-blue-400"
        rerender(<Button
            variant="BlueActionButton"
            onClick={onClick}
            disabled={false}
            size="regular"
            className={testClassName}
        >Button testing
            </Button>)
        expect(container.getElementsByClassName(testClassName))
    })
})