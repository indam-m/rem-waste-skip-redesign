import React from 'react';

import { render, screen } from '@testing-library/react';
import SelectSkipCard from '../SelectSkipCard';
import '@testing-library/jest-dom';

describe('SelectSkipCard Component', () => {
  test('check when card is disabled', () => {
    const skipOption = {
      id: 1,
      size: 8,
      hire_period_days: 14,
      price_before_vat: 420,
      allowed_on_road: false,
      allows_heavy_waste: false,
      vat: 84,
      postcode: 'AB12 3CD',
      forbidden: false,
      created_at: '2023-01-01T00:00:00Z',
      updated_at: '2023-01-01T00:00:00Z',
    };
    render(
      (
        <SelectSkipCard
          skipOption={skipOption}
          selected={false}
          onSelect={jest.fn()}
        />
      ) as React.ReactNode,
    );

    const cardElement = screen.getByTestId(`skip-card-${skipOption.id}`);
    expect(cardElement).toHaveClass('cursor-not-allowed');
  });

  test('renders skip cards correctly when data is fetched', async () => {
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
    render(
      (
        <SelectSkipCard
          skipOption={skipOption}
          selected={false}
          onSelect={jest.fn()}
        />
      ) as React.ReactNode,
    );

    const skipCard = await screen.findByText(/8-Yard Skip/i);
    expect(skipCard).toBeInTheDocument();
  });

  test('check when card is selected', () => {
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
    render(
      (
        <SelectSkipCard
          skipOption={skipOption}
          selected={true}
          onSelect={jest.fn()}
        />
      ) as React.ReactNode,
    );

    const cardElement = screen.getByTestId(`skip-card-${skipOption.id}`);
    expect(cardElement).toHaveClass('border-[#0037C1] bg-[#0037C1]/10');
  });
});
