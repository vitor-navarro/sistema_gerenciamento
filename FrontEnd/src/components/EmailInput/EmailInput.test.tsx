import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import EmailInput from './index';

describe('EmailInput', () => {

  test('renders without error', () => {
    render(<EmailInput onChangeFunction={() => { }} email="" />);
  });


  test('displays label correctly', () => {
    render(<EmailInput onChangeFunction={() => { }} email="" />);
    const emailLabel = screen.getByLabelText('Email');
    expect(emailLabel).toBeInTheDocument();
  });


  test('displays error message when email is invalid', () => {
    render(<EmailInput onChangeFunction={() => { }} email="" />);
    const emailInput = screen.getByLabelText('Email');
    fireEvent.change(emailInput, { target: { value: 'invalid_email' } });
    const errorMessage = screen.getByText('Email Inválido');
    expect(errorMessage).toBeInTheDocument();
  });


  test('calls onChangeFunction when email is changed', () => {
    const onChangeMock = jest.fn();
    render(<EmailInput onChangeFunction={onChangeMock} email="" />);
    const emailInput = screen.getByLabelText('Email');
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    expect(onChangeMock).toHaveBeenCalledWith('test@example.com');
  });


  test('sets required attribute on input when isRequired prop is true', () => {
    render(<EmailInput onChangeFunction={() => { }} email="" isRequired />);
    const emailInput = screen.getByLabelText('Email*');
    expect(emailInput).toHaveAttribute('required');
  });


  test('does not set required attribute on input when isRequired prop is false', () => {
    render(<EmailInput onChangeFunction={() => { }} email="" isRequired={false} />);
    const emailInput = screen.getByLabelText('Email');
    expect(emailInput).not.toHaveAttribute('required');
  });


  test('displays props.errorMessage when it is defined', () => {
    const errorMessage = 'Invalid email address';
    render(<EmailInput onChangeFunction={() => { }} email="" errorMessage={errorMessage} />);
    const emailInput = screen.getByLabelText('Email');
    fireEvent.change(emailInput, { target: { value: 'test@m' } });
    expect(screen.queryByText(errorMessage)).toBeInTheDocument();
  });


  test('should be error let false', () => {
    render(<EmailInput email="" onChangeFunction={() => { }} />);
    expect(screen.queryByText('Email Inválido')).toBeNull();
    render(<EmailInput email="" onChangeFunction={() => { }} error={true} />);
    expect(screen.getByText('Email Inválido')).toBeInTheDocument();
  });


  test('calls onChangeFunction with newEmail', () => {
    const onChangeMock = jest.fn();
    render(<EmailInput onChangeFunction={onChangeMock} email="" />);
    const emailInput = screen.getByLabelText('Email');
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    expect(onChangeMock).toHaveBeenCalledWith('test@example.com');
  });


  test('should call onChangeFunction when onChange event is triggered', () => {
    const mockOnChange = jest.fn();
    render(<EmailInput onChangeFunction={mockOnChange} email="" />);

    const input = screen.getByLabelText(/Email/i);
    const testEmail = 'test@example.com';

    fireEvent.change(input, { target: { value: testEmail } });

    expect(mockOnChange).toHaveBeenCalledWith(testEmail);
  });


  test('should render the correct label for no children value', () => {
    const mockOnChange = jest.fn();
    render(<EmailInput onChangeFunction={mockOnChange} email="" isRequired={true}></EmailInput>);
    const customLabel = screen.getByText(/Email/i);
    expect(customLabel.textContent).toBe('Email*');
  })


  test('should render the correct label for Custom Label children value', () => {
    const mockOnChange = jest.fn();
    render(<EmailInput onChangeFunction={mockOnChange} email="" isRequired={true}>Custom Label</EmailInput>);
    const customLabel = screen.getByText(/Custom Label/i);
    expect(customLabel.textContent).toBe('Custom Label*');
  })


  test('sets required attribute on input when isRequired prop is true', () => {
    render(<EmailInput onChangeFunction={() => { }} email="" isRequired />);
    const emailInput = screen.getByLabelText('Email*');
    expect(emailInput).toHaveAttribute('required');
  });


  test('does not set required attribute on input when isRequired prop is false', () => {
    render(<EmailInput onChangeFunction={() => { }} email="" isRequired={false} />);
    const emailInput = screen.getByLabelText('Email');
    expect(emailInput).not.toHaveAttribute('required');
  });

});