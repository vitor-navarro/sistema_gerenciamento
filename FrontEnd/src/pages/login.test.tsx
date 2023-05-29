import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Login from './login';

describe('Login component', () => {
    test('renders LoginPage component', () => {
        render(<Login />);
        expect(screen.getByText('Bem vindo')).toBeInTheDocument();
    });
});
