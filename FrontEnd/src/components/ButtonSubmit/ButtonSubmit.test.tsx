import { fireEvent, render, screen } from "@testing-library/react"
import ButtonSubmit from "./index"

describe("ButtonSubmit", () => {


    test("should render correctly with default arguments", () => {
        render(<ButtonSubmit />);
        const buttonElement = screen.getByRole('button');
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toHaveTextContent('Enviar');
    })


    test('should render the button with the text provided via children', () => {
        render(<ButtonSubmit>Enviar Pedido</ButtonSubmit>);
        const buttonElement = screen.getByRole('button');
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toHaveTextContent('Enviar Pedido');
    });


    test('should call onClick function when button is clicked', () => {
        const onClickMock = jest.fn();
        render(<ButtonSubmit onClick={onClickMock} />);
        const buttonElement = screen.getByRole('button');
        fireEvent.click(buttonElement);
        expect(onClickMock).toHaveBeenCalled();
    });

    test('should not call onClick function when button is clicked and onClick is undefined', () => {
        const onClickMock = jest.fn();
        render(<ButtonSubmit />);
        const buttonElement = screen.getByRole('button');
        fireEvent.click(buttonElement);
        expect(onClickMock).not.toHaveBeenCalled();
    });


})