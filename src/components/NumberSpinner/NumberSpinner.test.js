import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NumberSpinner from './NumberSpinner';

describe('NumberSpinner Component', () => {
  it('renders with default props and increments correctly', () => {
    const onChangeMock = jest.fn();

    render(<NumberSpinner onChange={onChangeMock} />);

    // Check if the spinner input is displayed
    const spinnerInput = screen.getByText('0');
    expect(spinnerInput).toBeInTheDocument();

    // Check if the decrement button is disabled initially
    const decrementButton = screen.getByRole('button', { name: /minus/i });
    expect(decrementButton).toBeDisabled();

    // Click on the increment button
    const incrementButton = screen.getByRole('button', { name: /plus/i });
    fireEvent.click(incrementButton);

    // Check if the onChange event is called with the correct value (1)
    expect(onChangeMock).toHaveBeenCalledWith(1);

    // Check if the spinner input updates correctly to 1
    expect(spinnerInput).toHaveTextContent('1');

    // Click on the increment button two more times
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);

    // Check if the onChange event is called with the correct value (3)
    expect(onChangeMock).toHaveBeenCalledWith(3);

    // Check if the spinner input updates correctly to 3
    expect(spinnerInput).toHaveTextContent('3');

    // The decrement button should be enabled after incrementing
    expect(decrementButton).not.toBeDisabled();
  });

  it('decrements correctly and disables buttons at min and max values', () => {
    const onChangeMock = jest.fn();

    render(<NumberSpinner min={1} max={5} onChange={onChangeMock} value={5} />);

    // Check if the spinner input is displayed and shows value 5
    const spinnerInput = screen.getByText('5');
    expect(spinnerInput).toBeInTheDocument();

    // Check if the increment button is disabled at max value (5)
    const incrementButton = screen.getByRole('button', { name: /plus/i });
    expect(incrementButton).toBeDisabled();

    // Click on the decrement button
    const decrementButton = screen.getByRole('button', { name: /minus/i });
    fireEvent.click(decrementButton);

    // Check if the onChange event is called with the correct value (4)
    expect(onChangeMock).toHaveBeenCalledWith(4);

    // Check if the spinner input updates correctly to 4
    expect(spinnerInput).toHaveTextContent('4');

    // Click on the decrement button two more times
    fireEvent.click(decrementButton);
    fireEvent.click(decrementButton);

    // Check if the onChange event is called with the correct value (2)
    expect(onChangeMock).toHaveBeenCalledWith(2);

    // Check if the spinner input updates correctly to 2
    expect(spinnerInput).toHaveTextContent('2');

    // The increment button should be enabled after decrementing
    expect(incrementButton).not.toBeDisabled();

    // Click on the decrement button to reach the min value (1)
    fireEvent.click(decrementButton);

    // Check if the onChange event is called with the correct value (1)
    expect(onChangeMock).toHaveBeenCalledWith(1);

    // The decrement button should be disabled at min value (1)
    expect(decrementButton).toBeDisabled();
  });
});
