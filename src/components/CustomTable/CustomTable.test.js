import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CustomTable } from './CustomTable';

// Sample test data for the table
const testData = [
  { id: 1, name: 'John Doe', age: 30, email: 'john.doe@example.com' },
  { id: 2, name: 'Jane Smith', age: 25, email: 'jane.smith@example.com' },
];

// Sample columns info
const columns = [
  { name: 'id', title: 'ID' },
  { name: 'name', title: 'Name' },
  { name: 'age', title: 'Age' },
  { name: 'email', title: 'Email' },
];

describe('CustomTable Component', () => {
  it('renders the table header and data correctly', () => {
    render(
      <CustomTable
        header={<div>Custom Table Header</div>}
        data={testData}
        keyProp="id"
        cols={columns}
      />
    );

    // Check if the table header is rendered correctly
    const headerElement = screen.getByText('Custom Table Header');
    expect(headerElement).toBeInTheDocument();

    // Check if the table data is rendered correctly
    testData.forEach((rowData) => {
      const rowElements = screen.getAllByText(String(rowData.id));
      expect(rowElements.length).toBe(1); // Check if only one cell with ID is present
      expect(screen.getByText(rowData.name)).toBeInTheDocument();
      expect(screen.getByText(String(rowData.age))).toBeInTheDocument();
      expect(screen.getByText(rowData.email)).toBeInTheDocument();
    });
  });

  it('renders the row detail when clicked', () => {
    // Sample row detail content
    const rowDetailContent = <div>Row Detail Content</div>;

    render(
      <CustomTable
        header={<div>Custom Table Header</div>}
        data={testData}
        keyProp="id"
        cols={columns}
        rowDetail={{
          rowIndex: 1, // Show detail for the second row (index: 1)
          content: rowDetailContent,
        }}
      />
    );

    // Click on the second row
    const secondRow = screen.getAllByText(String(testData[1].id))[0];
    userEvent.click(secondRow);

    // Check if the row detail content is displayed
    const detailContent = screen.getByText('Row Detail Content');
    expect(detailContent).toBeInTheDocument();
  });

  it('renders default success alert when type prop is missing', () => {
    // Render the table without the rowDetail prop
    render(
      <CustomTable
        header={<div>Custom Table Header</div>}
        data={testData}
        keyProp="id"
        cols={columns}
      />
    );

    // Check if the row detail content is not displayed initially
    const detailContent = screen.queryByText('Row Detail Content');
    expect(detailContent).not.toBeInTheDocument();
  });
});
