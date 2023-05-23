import React from 'react';
import { render,screen } from '@testing-library/react';
import HomePage from './index';

describe("Home page", ()=>{
    
    test('renders HomePage component', () => {
        render(<HomePage />);
        expect(screen.getByText('Home Page')).toBeInTheDocument();
      });

})