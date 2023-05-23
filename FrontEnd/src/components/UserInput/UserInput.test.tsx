import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import UserInput from './index';

describe("UserInput Component", () => {


    test('renders UserInput component without errors', () => {
        render(<UserInput onChangeFunction={() => { }} user="" error={false} />);
    });


    test('displays correct label text', () => {
        const labelText = 'Custom Label';
        render(<UserInput
            onChangeFunction={() => { }}
            user=""
            error={false}
        >{labelText}</UserInput>);

        const labelElement = screen.getByText(labelText);
        expect(labelElement).toBeInTheDocument();
    });


    test('displays error message when error prop is true', () => {
        const errorMessage = 'Invalid user';
        render(<UserInput
            onChangeFunction={() => { }}
            user=""
            error={true}
            errorMessage={errorMessage} />);

        const errorSpanElement = screen.getByText(errorMessage);
        expect(errorSpanElement).toBeInTheDocument();
    });


    test('calls onChangeFunction with the correct value when input changes', () => {
        const onChangeFunction = jest.fn();
        const inputValue = 'Tests';

        render(<UserInput
            onChangeFunction={onChangeFunction}
            user=""
            error={false}
        />);

        const inputElement = screen.getByPlaceholderText('Nome');
        fireEvent.change(inputElement, { target: { value: inputValue } });

        expect(onChangeFunction).toHaveBeenCalledTimes(1);
        expect(onChangeFunction).toHaveBeenCalledWith(inputValue);
    });


    test('should mark input as required when isRequired prop is true', () => {
        const onChangeFunction = jest.fn()
        render(<UserInput
            onChangeFunction={onChangeFunction}
            user=""
            error={false}
            isRequired={true}
        />);

        expect(screen.getByRole('textbox')).toHaveAttribute('required');
    });



    test('sshould not mark input as required when isRequired prop is false', () => {
        const onChangeFunction = jest.fn()
        render(<UserInput
            onChangeFunction={onChangeFunction}
            user=""
            error={false}
            isRequired={false}
        />);

        expect(screen.getByRole('textbox')).not.toHaveAttribute('required');
    });


    test('User Input component rendering test with Span Error', () => {
        const {unmount} =render(
            <UserInput error={true} errorMessage="" onChangeFunction={() => { }} user="" />
        );
        expect(screen.getByText(/Usuário inválido/i)).toBeInTheDocument();
        
        unmount()

        render(
            <UserInput error={true} errorMessage="Erro de usuário" onChangeFunction={() => { }} user="" />
        );
        expect(screen.getByText(/Erro de usuário/i)).toBeInTheDocument();

        render(
            <UserInput error={true} errorMessage="" onChangeFunction={() => { }} user="" />
        );

        expect(screen.getByText(/Usuário inválido/i)).toBeInTheDocument();
    });
})