import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Card } from './index';

describe('Card component', () => {
    const mockProps = {
        title: 'Test Title',
        description: 'Test Description',
        link: 'https://example.com',
    };

    test('renders the card with correct title and description', () => {
        render(<Card {...mockProps} />);
        const titleElement = screen.getByText(mockProps.title);
        const descriptionElement = screen.getByText(mockProps.description);

        expect(titleElement).toBeInTheDocument();
        expect(descriptionElement).toBeInTheDocument();
    });

    test('renders the card container with correct class name', () => {
        const { container } = render(<Card {...mockProps} />);
        const cardContainer = container.querySelector('.cardContainer');

        expect(cardContainer).toBeInTheDocument();
    });

    test('navigates to the correct link on card click', () => {
        const { container } = render(<Card {...mockProps} />);
        const cardContainer = container.querySelector('.cardContainer');

        Object.defineProperty(window, 'location', {
            value: { href: '' },
            writable: true,
        });

        if (cardContainer) {
            fireEvent.click(cardContainer);
        }

        expect(window.location.href).toBe(mockProps.link);
    });
});
