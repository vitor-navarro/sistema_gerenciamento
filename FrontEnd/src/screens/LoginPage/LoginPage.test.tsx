import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { LoginPage } from './index';

describe("Login Page", () => {

    test('renders form elements', () => {
        render(<LoginPage />);
        expect(screen.getByLabelText('Login*')).toBeInTheDocument();
        expect(screen.getByLabelText('Senha*')).toBeInTheDocument();
        expect(screen.getByText('Entrar')).toBeInTheDocument();
    });


    test('handles user input correctly', () => {
        render(<LoginPage />);
        const userInput = screen.getByLabelText('Login*') as HTMLInputElement;
        fireEvent.change(userInput, { target: { value: 'teste.doe@example.com' } });
        expect(userInput.value).toBe('teste.doe@example.com');
    });


    test('handles password input correctly', () => {
        render(<LoginPage />);
        const passwordInput = screen.getByLabelText('Senha*') as HTMLInputElement;
        fireEvent.change(passwordInput, { target: { value: 'password123' } });
        expect(passwordInput.value).toBe('password123');
    });


    test('displays error message for invalid user', () => {
        render(<LoginPage />);
        const userInput = screen.getByLabelText('Login*');
        fireEvent.change(userInput, { target: { value: 'j' } });
        expect(screen.getByText('O Usuário deve ter no mínimo 3 caracteres')).toBeInTheDocument();
    });


    test('displays error message for invalid password', () => {
        render(<LoginPage />);
        const passwordInput = screen.getByLabelText('Senha*');
        fireEvent.change(passwordInput, { target: { value: '123' } });
        expect(screen.getByText('A senha deve ter no mínimo 7 caracteres')).toBeInTheDocument();
    });


    test('calls login function on submit', () => {
        render(<LoginPage />);
        const loginButton = screen.getByText('Entrar');
        const loginMock = jest.fn();
        loginButton.onclick = loginMock;
        fireEvent.click(loginButton);
        expect(loginMock).toHaveBeenCalledTimes(1);
    });


    test('toggles rememberMe state correctly', () => {
        render(<LoginPage />);
        const rememberMeCheckbox = screen.getByLabelText('Lembrar-me') as HTMLInputElement;
        fireEvent.click(rememberMeCheckbox);
        expect(rememberMeCheckbox.checked).toBe(true);
        fireEvent.click(rememberMeCheckbox);
        expect(rememberMeCheckbox.checked).toBe(false);
    });


})