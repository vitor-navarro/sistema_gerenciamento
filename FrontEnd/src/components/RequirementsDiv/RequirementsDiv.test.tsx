import React from "react";
import {render,screen} from "@testing-library/react"
import RequirementsDiv from "./index"

describe("Product form component", ()=>{

    test("renders without error", () => {
        const text = "Teste"
        render(<RequirementsDiv isValid={false}>{text}</RequirementsDiv>)

        expect(screen.getByText(text)).toBeInTheDocument()
    })

    test("must add 'valid' class when isValid is true",()=>{
        const { container } = render(
            <RequirementsDiv isValid={true}>Texto de exemplo</RequirementsDiv>
          );
      
          expect(container.firstChild).toHaveClass("valid");
    })


    test("must not add 'valid' class when isValid is false", () => {
        const { container } = render(
          <RequirementsDiv isValid={false}>Texto de exemplo</RequirementsDiv>
        );
    
        expect(container.firstChild).not.toHaveClass("valid");
      });

})
