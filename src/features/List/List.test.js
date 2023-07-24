import React from 'react';
import { render, screen } from '@testing-library/react';
import List from './List';
import useDetail from './hooks/useDetail';

// Sample flight details
const mockSampleDetails = [
    {
        "originAirport": {
            "name": "Istanbul Airport",
            "code": "IST",
            "city": {
                "code": "IST",
                "name": "Istanbul"
            },
            "country": {
                "code": "TR",
                "name": "Turkey"
            }
        },
        "destinationAirport": {
            "name": "Antalya Airport",
            "code": "AYT",
            "city": {
                "code": "AYT",
                "name": "Antalya"
            },
            "country": {
                "code": "TR",
                "name": "Turkey"
            }
        },
        "arrivalDateTimeDisplay": "18:20",
        "departureDateTimeDisplay": "19:50",
        "flightDuration": "1s 30d",
        "fareCategories": {
            "BUSINESS": {
                "subcategories": [
                    {
                        "brandCode": "ecoFly",
                        "price": {
                            "amount": 670,
                            "currency": "TRY"
                        },
                        "order": 1,
                        "status": "AVAILABLE",
                        "rights": [
                            "20 kg Bagaj",
                            "Ucresiz Yemek Secimi"
                        ]
                    },
                    {
                        "brandCode": "extraFly",
                        "price": {
                            "amount": 956,
                            "currency": "TRY"
                        },
                        "order": 2,
                        "status": "AVAILABLE",
                        "rights": [
                            "30 kg Bagaj",
                            "Standart Koltuk Secimi",
                            "Ucresiz Yemek Secimi"
                        ]
                    },
                    {
                        "brandCode": "primeFly",
                        "price": {
                            "amount": 1358,
                            "currency": "TRY"
                        },
                        "order": 3,
                        "status": "AVAILABLE",
                        "rights": [
                            "50 kg Bagaj",
                            "Standart Koltuk Secimi",
                            "Ucretsiz Degisiklik",
                            "Ucresiz Yemek Secimi"
                        ]
                    }
                ]
            },
            "ECONOMY": {
                "subcategories": [
                    {
                        "brandCode": "ecoFly",
                        "price": {
                            "amount": 195,
                            "currency": "TRY"
                        },
                        "order": 1,
                        "status": "AVAILABLE",
                        "rights": [
                            "15 kg Bagaj"
                        ]
                    },
                    {
                        "brandCode": "extraFly",
                        "price": {
                            "amount": 290.5,
                            "currency": "TRY"
                        },
                        "order": 2,
                        "status": "AVAILABLE",
                        "rights": [
                            "20 kg Bagaj",
                            "Standart Koltuk Secimi"
                        ]
                    },
                    {
                        "brandCode": "primeFly",
                        "price": {
                            "amount": 458,
                            "currency": "TRY"
                        },
                        "order": 3,
                        "status": "AVAILABLE",
                        "rights": [
                            "25 kg Bagaj",
                            "Standart Koltuk Secimi",
                            "Ucretsiz Degisiklik"
                        ]
                    }
                ]
            }
        }
    }
];

// Mock the localStorage for testing
global.localStorage.setItem = jest.fn();

jest.mock("./hooks/useDetail");
describe('List Component', () => {

    it('renders an alert when there are no flight details', () => {
        // Mock the useDetail hook to return an empty details array
        useDetail.mockReturnValue([[], []]);

        render(<List />);

        // Check if the alert message is displayed
        const alertMessage = screen.getByText('Seçilen kriterlere uygun uçuş bulunamadı!');
        expect(alertMessage).toBeInTheDocument();

        // Check if the "Başa Dön" button is displayed
        const returnButton = screen.getByRole('button', { name: /başa dön/i });
        expect(returnButton).toBeInTheDocument();
    });

    it('renders the FlightsTable component when there are flight details', () => {

        useDetail.mockReturnValue([mockSampleDetails, []]);

        render(<List />);

        // Check if the FlightsTable component is rendered
        const tableHeader = screen.getByText('Sıralama Kriteri');
        expect(tableHeader).toBeInTheDocument();
    });
});
