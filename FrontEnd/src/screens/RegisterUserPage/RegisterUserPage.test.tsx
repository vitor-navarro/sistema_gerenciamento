import { render, screen, fireEvent } from '@testing-library/react';
import { RegisterUserPage } from './index';

describe('RegisterUserPage', () => {


    test('renders the registration form', () => {
        render(<RegisterUserPage />);
        const formTitle = screen.getByText('Registro');
        expect(formTitle).toBeInTheDocument();
    });


    test('displays error message when user input is invalid', () => {
        render(<RegisterUserPage />);
        const userInput = screen.getByLabelText('Usuário*');
        fireEvent.change(userInput, { target: { value: 'us' } });
        const registerButton = screen.getByText('Cadastrar');
        fireEvent.click(registerButton);
        const errorMessage = screen.getByText('O Usuário deve ter no mínimo 3 caracteres');
        expect(errorMessage).toBeInTheDocument();
    });


    test('displays error message when email input is invalid', () => {
        render(<RegisterUserPage />);

        const emailInput = screen.getByLabelText('Email*');
        fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
        const registerButton = screen.getByText('Cadastrar');
        fireEvent.click(registerButton);
        const errorMessage = screen.getByText('Email Inválido');
        expect(errorMessage).toBeInTheDocument();
    });


    test('should toggle dataPolicy state when handledataPolicy is called', () => {
        render(<RegisterUserPage />);
        const dataPolicyCheckbox = screen.getByLabelText(/Li e concordo com a politica de tratamento de dados/i) as HTMLInputElement;
        expect(dataPolicyCheckbox.checked).toBe(false);
        fireEvent.click(dataPolicyCheckbox);
        expect(dataPolicyCheckbox.checked).toBe(true);
        fireEvent.click(dataPolicyCheckbox);
        expect(dataPolicyCheckbox.checked).toBe(false);
    });


    test('handlePasswordChange updates password', () => {
        render(<RegisterUserPage />);
        const passwordInput = screen.getByLabelText('Senha*') as HTMLInputElement;
        fireEvent.change(passwordInput, { target: { value: 'password123' } });
        expect(passwordInput.value).toBe('password123');
    });
});