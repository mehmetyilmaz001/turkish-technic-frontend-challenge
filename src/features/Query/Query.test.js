import React from 'react';
import { render, screen } from '@testing-library/react';
import Query from './Query';

// Mock the localStorage for testing
const mockLocalStorageSetItem = jest.fn();
global.localStorage.setItem = mockLocalStorageSetItem;


describe('Query Component', () => {
    beforeEach(() => {
        window.matchMedia = window.matchMedia || function () {
            return {
                matches: false,
                addListener: function () { },
                removeListener: function () { }
            };
        }
    });

    it('renders the QueryForm component correctly', () => {
        render(<Query />);

        // Check if the "Nereden" placeholder is displayed
        const fromInput = screen.getByText('Nereden');
        expect(fromInput).toBeInTheDocument();

        // Check if the "Nereye" placeholder is displayed
        const toInput = screen.getByText('Nereye');
        expect(toInput).toBeInTheDocument();

        // Check if the "Tarih" label is displayed
        const dateLabel = screen.getByText('Tarih');
        expect(dateLabel).toBeInTheDocument();

        // Check if the "Kabin ve Yolcu Seçimi" label is displayed
        const cabinPassengerLabel = screen.getByTestId('btn-cabin');
        expect(cabinPassengerLabel).toBeInTheDocument();

        // Check if the submit button is displayed
        const nextButton = screen.getByTestId('btn-submit');
        expect(nextButton).toBeInTheDocument();
    });
});
