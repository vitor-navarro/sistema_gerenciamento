import React from "react";
import { render, screen, fireEvent, getByPlaceholderText } from "@testing-library/react";
import PasswordInput from "./index";

describe("Password input Component", () => {


    test("renders without error", () => {
        render(<PasswordInput onChangeFunction={() => { }} password="" />)
    })


    test('displays error message when password is invalid', () => {
        const errorMessage = '';
        render(
            <PasswordInput
                onChangeFunction={() => { }}
                password="invalidpassword"
                error={false}
                errorMessage={errorMessage}
            />
        );
    
        const input = screen.getByPlaceholderText('Senha')
        fireEvent.change(input, { target: { value: "newp" } })
    
        const errorSpan = screen.getByText('Senha Inválida');
        expect(errorSpan).toBeInTheDocument();
    });   
     
    
    test("calls onChangeFunction when input value changes", () => {
        const onChangeFunction = jest.fn()
        render(<PasswordInput onChangeFunction={onChangeFunction} password="" />)

        const input = screen.getByPlaceholderText('Senha')
        fireEvent.change(input, { target: { value: "newpassword" } })

        expect(onChangeFunction).toHaveBeenCalledWith('newpassword');
    })


    test('toggles password visibility when button is clicked', () => {
        render(
            <PasswordInput onChangeFunction={() => { }} password="" />
        );

        const passwordInput = screen.getByLabelText('Senha*') as HTMLInputElement;
        const toggleButton = screen.getByRole('button');
        fireEvent.click(toggleButton);

        expect(passwordInput.type).toBe('text');
        fireEvent.click(toggleButton);
        expect(passwordInput.type).toBe('password');
    });



})