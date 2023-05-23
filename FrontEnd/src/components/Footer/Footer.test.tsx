import React from 'react'
import { render, screen } from '@testing-library/react'
import { Footer } from './index'

describe("Footer Component", () => {

    test("renders be able to render a footer", () => {
        const { container } = render(<Footer />)
        const footer = container.querySelector("footer")
        expect(footer).toBeInTheDocument()
    })

})