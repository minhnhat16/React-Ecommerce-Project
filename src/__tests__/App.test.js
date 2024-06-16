import React from 'react';
import { render } from '@testing-library/react';
import { Cart } from '../components';
test('renders App component without crashing', () => {
  const { getByText } = <Cart />;
  
  // Add your assertions here
});
