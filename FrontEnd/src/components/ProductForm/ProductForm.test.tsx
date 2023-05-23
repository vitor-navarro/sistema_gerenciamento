import React from "react";
import {render,screen} from "@testing-library/react"
import CreateProduct from "./index"

describe("Product form component", ()=>{

    test("renders without error", () => {
        render(<CreateProduct/>)
    })

})
