import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { render, getByTestId, getAllByTestId } from '@testing-library/react';
import { testNameToKey } from 'jest-snapshot/build/utils';

it('renders without crashing', () => {
  render(<App />)
});

test(`Advanced React: Women's World Cup Title Displays`, () => {
  const { getByText } = render(<App />)
  getByText(/Advanced React: Women's World Cup/i)
})
  

test('Grabs Toggle Button by ID', () => {
  const { getByTestId } = render(<App />)
  getByTestId('toggle-button')
})