import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For additional matchers like toBeInTheDocument
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

jest.mock('./some-external-dependency', () => ({
  someExternalDependency: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  const mockFetchData = jest.fn();

  beforeEach(() => {
    mockFetchData.mockReset();
    render(<CoreFunctionalityComponent fetchData={mockFetchData} />);
  });

  test('renders loading state when data is being fetched', async () => {
    // Simulate the delay of fetching data
    mockFetchData.mockImplementation(async () => new Promise(resolve => setTimeout(() => resolve(), 100)));
    
    const { container } = render(<CoreFunctionalityComponent fetchData={mockFetchData} />);
    
    expect(screen.getByText('Loading...')).toBeInTheDocument();
    
    await waitFor(() => {
      expect(container.querySelector('.loading-state')).not.toBeInTheDocument();
    });
  });

  test('renders data after successful fetch', async () => {
    mockFetchData.mockResolvedValue({ key: 'value' });
    render(<CoreFunctionalityComponent fetchData={mockFetchData} />);
    
    await waitFor(() => {
      expect(screen.getByText('value')).toBeInTheDocument();
    });
  });

  test('handles errors during data fetching', async () => {
    const error = new Error('Failed to fetch');
    mockFetchData.mockRejectedValue(error);
    render(<CoreFunctionalityComponent fetchData={mockFetchData} />);
    
    await waitFor(() => {
      expect(screen.getByText('Error: Failed to fetch')).toBeInTheDocument();
    });
  });

  test('user interaction triggers data fetching', () => {
    const { container } = render(<CoreFunctionalityComponent fetchData={mockFetchData} />);
    
    fireEvent.click(container.querySelector('.fetch-data-button')!);
    
    expect(mockFetchData).toHaveBeenCalledTimes(1);
  });

  test('component is accessible', async () => {
    mockFetchData.mockResolvedValue({ key: 'value' });
    render(<CoreFunctionalityComponent fetchData={mockFetchData} />);
    
    await waitFor(() => {
      const button = screen.getByRole('button', { name: /fetch data/i });
      expect(button).toBeVisible();
      
      // Check for ARIA attributes
      expect(screen.getByText('Loading...')).toHaveAttribute('aria-busy', 'true');
      
      // Ensure the component is keyboard navigable
      fireEvent.keyDown(document.activeElement!, { key: 'Enter' });
      expect(mockFetchData).toHaveBeenCalledTimes(1);
    });
  });

  test('renders no data message when there is no data to display', () => {
    mockFetchData.mockResolvedValue({});
    render(<CoreFunctionalityComponent fetchData={mockFetchData} />);
    
    expect(screen.getByText('No Data Available')).toBeInTheDocument();
  });
});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For additional matchers like toBeInTheDocument
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

jest.mock('./some-external-dependency', () => ({
  someExternalDependency: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  const mockFetchData = jest.fn();

  beforeEach(() => {
    mockFetchData.mockReset();
    render(<CoreFunctionalityComponent fetchData={mockFetchData} />);
  });

  test('renders loading state when data is being fetched', async () => {
    // Simulate the delay of fetching data
    mockFetchData.mockImplementation(async () => new Promise(resolve => setTimeout(() => resolve(), 100)));
    
    const { container } = render(<CoreFunctionalityComponent fetchData={mockFetchData} />);
    
    expect(screen.getByText('Loading...')).toBeInTheDocument();
    
    await waitFor(() => {
      expect(container.querySelector('.loading-state')).not.toBeInTheDocument();
    });
  });

  test('renders data after successful fetch', async () => {
    mockFetchData.mockResolvedValue({ key: 'value' });
    render(<CoreFunctionalityComponent fetchData={mockFetchData} />);
    
    await waitFor(() => {
      expect(screen.getByText('value')).toBeInTheDocument();
    });
  });

  test('handles errors during data fetching', async () => {
    const error = new Error('Failed to fetch');
    mockFetchData.mockRejectedValue(error);
    render(<CoreFunctionalityComponent fetchData={mockFetchData} />);
    
    await waitFor(() => {
      expect(screen.getByText('Error: Failed to fetch')).toBeInTheDocument();
    });
  });

  test('user interaction triggers data fetching', () => {
    const { container } = render(<CoreFunctionalityComponent fetchData={mockFetchData} />);
    
    fireEvent.click(container.querySelector('.fetch-data-button')!);
    
    expect(mockFetchData).toHaveBeenCalledTimes(1);
  });

  test('component is accessible', async () => {
    mockFetchData.mockResolvedValue({ key: 'value' });
    render(<CoreFunctionalityComponent fetchData={mockFetchData} />);
    
    await waitFor(() => {
      const button = screen.getByRole('button', { name: /fetch data/i });
      expect(button).toBeVisible();
      
      // Check for ARIA attributes
      expect(screen.getByText('Loading...')).toHaveAttribute('aria-busy', 'true');
      
      // Ensure the component is keyboard navigable
      fireEvent.keyDown(document.activeElement!, { key: 'Enter' });
      expect(mockFetchData).toHaveBeenCalledTimes(1);
    });
  });

  test('renders no data message when there is no data to display', () => {
    mockFetchData.mockResolvedValue({});
    render(<CoreFunctionalityComponent fetchData={mockFetchData} />);
    
    expect(screen.getByText('No Data Available')).toBeInTheDocument();
  });
});