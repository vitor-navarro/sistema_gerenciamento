import { render, screen } from "@testing-library/react"
import ButtonSubmit from "./index"

describe("ButtonSubmit",()=>{


    test("should render correctly with default arguments", ()=>{
        render(<ButtonSubmit />);
        const buttonElement = screen.getByRole('button');
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toHaveTextContent('Enviar');
    })
})