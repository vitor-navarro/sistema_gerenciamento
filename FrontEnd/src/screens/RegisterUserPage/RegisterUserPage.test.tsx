import { render, screen, fireEvent, act } from '@testing-library/react';
import { RegisterUserPage } from './index';


describe('RegisterUserPage', () => {


    test('renders the registration form', () => {
        render(<RegisterUserPage />);
        const formTitle = screen.getByText('Registro');
        expect(formTitle).toBeInTheDocument();
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

    test('handlePasswordChange and handleConfirmPasswordChange updates password and confirm no error', () => {
        jest.useFakeTimers();

        render(<RegisterUserPage />);
        const passwordInput = screen.getByLabelText('Senha*');
        fireEvent.change(passwordInput, { target: { value: '1234567' } });
        expect(passwordInput).toHaveValue('1234567');

        const confirmPasswordInput = screen.getByLabelText('Confirmar Senha*');
        fireEvent.change(confirmPasswordInput, { target: { value: '1234567' } });
        expect(confirmPasswordInput).toHaveValue('1234567');

        act(() => {
            jest.advanceTimersByTime(100);
          });

        const errorMessage = screen.queryByText('As senhas não são idênticas');
        expect(errorMessage).not.toBeInTheDocument();

        jest.useRealTimers();
    });


    test('must test whether the error was correctly placed in the Confirm Password handle', () => {
        jest.useFakeTimers();

        render(<RegisterUserPage />);
        const passwordInput = screen.getByLabelText('Senha*');
        fireEvent.change(passwordInput, { target: { value: '1234567' } });// dif password

        const confirmPasswordInput = screen.getByLabelText('Confirmar Senha*');
        fireEvent.change(confirmPasswordInput, { target: { value: '12345679' } });// dif password

        act(() => {
            jest.advanceTimersByTime(200);
        });

        const errorMessage = screen.queryByText('As senhas não são idênticas');
        expect(errorMessage).toBeInTheDocument();

        jest.useRealTimers();
    });
});