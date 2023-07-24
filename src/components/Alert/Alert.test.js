import React from 'react';
import { render, screen } from '@testing-library/react';
import Alert, { ALERT_TYPE } from './Alert'; // Assuming your component file is named Alert.js

describe('Alert Component', () => {
  it('renders a success alert correctly', () => {
    const message = 'Success message';
    render(
      <Alert type={ALERT_TYPE.SUCCESS} message={message} />
    );
    // Check if the success icon is rendered
    const successIcon = screen.getByTestId('success-icon');
    expect(successIcon).toBeInTheDocument();

    // Check if the fail icon is not rendered
    const failIcon = screen.queryByTestId('fail-icon');
    expect(failIcon).not.toBeInTheDocument();

    // Check if the correct message is rendered
    const messageElement = screen.getByText(message);
    expect(messageElement).toBeInTheDocument();

    // Check if the retry button is not rendered for success alert
    const retryButton = screen.queryByTestId('retry-button');
    expect(retryButton).not.toBeInTheDocument();

  });

  it('renders a fail alert correctly with a retry button', () => {
    const message = 'Failure message';
    const retryButtonProps = {
      label: 'Retry',
      onClick: jest.fn() // Mocking the onClick function for the retry button
    };
    render(
      <Alert type={ALERT_TYPE.FAIL} message={message} buttonProps={retryButtonProps} />
    );

    // Check if the success icon is not rendered for fail alert
    const successIcon = screen.queryByTestId('success-icon');
    expect(successIcon).not.toBeInTheDocument();

    // Check if the fail icon is rendered
    const failIcon = screen.queryByTestId('fail-icon');
    expect(failIcon).toBeInTheDocument();

    // Check if the correct message is rendered
    const messageElement = screen.getByText(message);
    expect(messageElement).toBeInTheDocument();

    // Check if the retry button is rendered for fail alert
    const retryButton = screen.getByText(retryButtonProps.label);
    expect(retryButton).toBeInTheDocument();
  });

  it('renders default success alert when type prop is missing', () => {
    const message = 'Default success message';
    render(<Alert message={message} />);

    // Check if the success icon is rendered by default
    const successIcon = screen.getByTestId('success-icon');
    expect(successIcon).toBeInTheDocument();
  });
});
