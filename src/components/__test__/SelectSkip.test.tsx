import React from 'react'; // necessary for testing and building
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import SelectSkip from '../SelectSkip';
import '@testing-library/jest-dom';
import fetchMock from 'jest-fetch-mock';
import { GeneralContext } from '../../contexts/GeneralContext';
import { SkipOption } from '../../types/skipType';

fetchMock.enableMocks();

describe('SelectSkip Component', () => {
  const skipOption = {
    id: 1,
    size: 8,
    hire_period_days: 14,
    price_before_vat: 420,
    allowed_on_road: true,
    allows_heavy_waste: true,
    vat: 84,
    postcode: 'AB12 3CD',
    forbidden: false,
    created_at: '2023-01-01T00:00:00Z',
    updated_at: '2023-01-01T00:00:00Z',
  };

  const mockContextValue = {
    wasteInput: {
      selectedSkipID: 0,
      selectedSkipObj: {} as SkipOption,
      selectedWasteTypes: [],
      selectedPermitCheck: 0,
    },
    setWasteInput: jest.fn(),
    setLoading: jest.fn(),
    currency: '$',
    currentStep: 3,
    loading: false,
    setCurrentStep: jest.fn(),
  };

  beforeEach(() => {
    fetchMock.resetMocks();
  });

  test('renders SelectSkip component correctly with fetched data', async () => {
    fetchMock.mockResponseOnce(JSON.stringify([skipOption]));
    const children: React.ReactNode = (
      <SelectSkip onBack={jest.fn()} onContinue={jest.fn()} />
    ); // variable to enable import React for npm testing and building

    render(
      <GeneralContext.Provider value={mockContextValue}>
        {children}
      </GeneralContext.Provider>,
    );

    await waitFor(() => {
      const skipCard = screen.getByTestId(`skip-card-${skipOption.id}`);
      expect(skipCard).toBeInTheDocument();
    });
  });

  test('displays correct skip size and price', async () => {
    fetchMock.mockResponseOnce(JSON.stringify([skipOption]));

    render(
      <GeneralContext.Provider value={mockContextValue}>
        <SelectSkip onBack={jest.fn()} onContinue={jest.fn()} />
      </GeneralContext.Provider>,
    );

    await waitFor(() => {
      expect(screen.getByText(/8-Yard Skip/i)).toBeInTheDocument();
      expect(screen.getByText(/\$420/i)).toBeInTheDocument();
    });
  });

  test('calls onSelect when the card is clicked', async () => {
    fetchMock.mockResponseOnce(JSON.stringify([skipOption]));

    const setWasteInputMock = jest.fn();
    const contextValueWithMock = {
      ...mockContextValue,
      setWasteInput: setWasteInputMock,
    };

    render(
      <GeneralContext.Provider value={contextValueWithMock}>
        <SelectSkip onBack={jest.fn()} onContinue={jest.fn()} />
      </GeneralContext.Provider>,
    );

    await waitFor(() => {
      const skipCard = screen.getByTestId(`skip-card-${skipOption.id}`);
      fireEvent.click(skipCard);
      expect(setWasteInputMock).toHaveBeenCalledTimes(1);
    });
  });

  test('applies correct styles when selected', async () => {
    fetchMock.mockResponseOnce(JSON.stringify([skipOption]));

    const contextValueWithSelectedSkip = {
      ...mockContextValue,
      wasteInput: {
        ...mockContextValue.wasteInput,
        selectedSkipID: skipOption.id,
        selectedSkipObj: skipOption,
      },
    };

    render(
      <GeneralContext.Provider value={contextValueWithSelectedSkip}>
        <SelectSkip onBack={jest.fn()} onContinue={jest.fn()} />
      </GeneralContext.Provider>,
    );

    await waitFor(() => {
      const skipCard = screen.getByTestId(`skip-card-${skipOption.id}`);
      expect(skipCard).toHaveClass('border-[#0037C1] bg-[#0037C1]/10');
    });
  });

  test('displays error message when fetch fails', async () => {
    fetchMock.mockRejectOnce(new Error('Failed to fetch'));

    render(
      <GeneralContext.Provider value={mockContextValue}>
        <SelectSkip onBack={jest.fn()} onContinue={jest.fn()} />
      </GeneralContext.Provider>,
    );

    await waitFor(() => {
      expect(
        screen.getByText(/Failed to load available skips for your location/i),
      ).toBeInTheDocument();
    });
  });
});
