import { render, screen, fireEvent } from '@testing-library/react';
import { RegisterUserPage } from '@/screens/RegisterUserPage';

describe("Register integration test",()=>{
//needs database// integration test
    test.skip('displays success message when registration is successful', async () => {
        render(<RegisterUserPage />);
        const userInput = screen.getByLabelText('Usuário*');
        const emailInput = screen.getByLabelText('Email*');
        const passwordInput = screen.getByLabelText('Senha*');
        const confirmPasswordInput = screen.getByLabelText('Confirmar Senha*');
        const dataPolicyCheckbox = screen.getByLabelText('Li e concordo com a politica de tratamento de dados Saiba Mais');
        
        fireEvent.change(userInput, { target: { value: 'testuser' } });
        fireEvent.change(emailInput, { target: { value: 'testuser@example.com' } });
        fireEvent.change(passwordInput, { target: { value: 'password123' } });
        fireEvent.change(confirmPasswordInput, { target: { value: 'password123' } });
        fireEvent.click(dataPolicyCheckbox);
        const registerButton = screen.getByText('Cadastrar');
        fireEvent.click(registerButton);

        expect(window.location.pathname).toBe('/login');
    });
})

