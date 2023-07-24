import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Result from './Result';
import { PATHS } from '../../constants';

// Mock the localStorage for testing
global.localStorage.getItem = jest.fn(() =>
  JSON.stringify({
    subCategory: {
      status: 'SUCCESS',
      price: {
        currency: 'TRY',
        amount: 100,
      },
    },
    selectedFlight: {
      cabinAndPassenger: {
        passenger: 2,
      },
    },
  })
);

describe('Result Component', () => {
  it('displays success message and total amount when the subcategory status is SUCCESS', () => {
    render(<Result />);

    // Check if the success message is displayed
    const successMessage = screen.getByText(/kabin seçiminiz tamamlandı./i);
    expect(successMessage).toBeInTheDocument();

    // Check if the total amount is displayed
    const totalAmount = screen.getByText(/toplam tutar/i);
    expect(totalAmount).toBeInTheDocument();

    // Check if the correct total amount value is displayed
    const totalAmountValue = screen.getByText('TRY 200');
    expect(totalAmountValue).toBeInTheDocument();
  });

  it('displays fail message when the subcategory status is ERROR', () => {
    // Mock the localStorage for the ERROR status
    global.localStorage.getItem = jest.fn(() =>
      JSON.stringify({
        subCategory: {
          status: 'ERROR',
        },
      })
    );

    render(<Result />);

    // Check if the fail message is displayed
    const failMessage = screen.getByText(/kabin seçiminiz tamamlanamadi./i);
    expect(failMessage).toBeInTheDocument();

    // Check if the "Başa Dön" button is displayed
    const returnButton = screen.getByRole('button', { name: /başa dön/i });
    expect(returnButton).toBeInTheDocument();

    // Check if the total amount is not displayed
    const totalAmount = screen.queryByText(/toplam tutar/i);
    expect(totalAmount).toBeNull();
  });
});
