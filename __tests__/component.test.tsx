import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toBeInTheDocument
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

// Mocking external dependencies
jest.mock('./ExternalDependency', () => ({
  useExternalData: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  beforeEach(() => {
    (useExternalData as jest.Mock).mockReturnValue({
      data: [],
      error: null,
      loading: false,
    });
  });

  test('renders without crashing', () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/core functionality/i)).toBeInTheDocument();
  });

  test('displays loading state when fetching data', () => {
    (useExternalData as jest.Mock).mockReturnValue({
      data: [],
      error: null,
      loading: true,
    });
    render(<CoreFunctionalityComponent />);
    expect(screen.getByRole('status')).toHaveTextContent(/loading/i);
  });

  test('displays error message when fetching fails', () => {
    (useExternalData as jest.Mock).mockReturnValue({
      data: [],
      error: 'Failed to fetch',
      loading: false,
    });
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/failed to fetch/i)).toBeInTheDocument();
  });

  test('handles user interaction with buttons', () => {
    const handleButtonClick = jest.fn();
    render(
      <CoreFunctionalityComponent
        onButtonClick={handleButtonClick}
      />
    );
    fireEvent.click(screen.getByRole('button'));
    expect(handleButtonClick).toHaveBeenCalled();
  });

  test('validates form inputs and displays error messages', () => {
    render(<CoreFunctionalityComponent />);
    fireEvent.change(screen.getByLabelText(/input label/i), { target: { value: '' } });
    fireEvent.click(screen.getByText(/submit/i));
    expect(screen.getByText(/error message/i)).toBeInTheDocument();
  });

  test('ensures accessibility features are properly implemented', () => {
    render(<CoreFunctionalityComponent />);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label', 'action label');
    expect(button).toBeEnabled();
  });
});

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toBeInTheDocument
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

// Mocking external dependencies
jest.mock('./ExternalDependency', () => ({
  useExternalData: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  beforeEach(() => {
    (useExternalData as jest.Mock).mockReturnValue({
      data: [],
      error: null,
      loading: false,
    });
  });

  test('renders without crashing', () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/core functionality/i)).toBeInTheDocument();
  });

  test('displays loading state when fetching data', () => {
    (useExternalData as jest.Mock).mockReturnValue({
      data: [],
      error: null,
      loading: true,
    });
    render(<CoreFunctionalityComponent />);
    expect(screen.getByRole('status')).toHaveTextContent(/loading/i);
  });

  test('displays error message when fetching fails', () => {
    (useExternalData as jest.Mock).mockReturnValue({
      data: [],
      error: 'Failed to fetch',
      loading: false,
    });
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/failed to fetch/i)).toBeInTheDocument();
  });

  test('handles user interaction with buttons', () => {
    const handleButtonClick = jest.fn();
    render(
      <CoreFunctionalityComponent
        onButtonClick={handleButtonClick}
      />
    );
    fireEvent.click(screen.getByRole('button'));
    expect(handleButtonClick).toHaveBeenCalled();
  });

  test('validates form inputs and displays error messages', () => {
    render(<CoreFunctionalityComponent />);
    fireEvent.change(screen.getByLabelText(/input label/i), { target: { value: '' } });
    fireEvent.click(screen.getByText(/submit/i));
    expect(screen.getByText(/error message/i)).toBeInTheDocument();
  });

  test('ensures accessibility features are properly implemented', () => {
    render(<CoreFunctionalityComponent />);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label', 'action label');
    expect(button).toBeEnabled();
  });
});