import React from 'react';
import { render,screen } from '@testing-library/react';
import Home from '../../pages/index';
import HomePage from '@/screens/HomePage';

describe('Home component', () => {
  
  test('renders HomePage component', () => {
    render(<Home />);
    expect(screen.getByText('Home Page')).toBeInTheDocument();
  });

});