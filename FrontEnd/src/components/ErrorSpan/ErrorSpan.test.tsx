import React from "react";
import { render, screen } from "@testing-library/react";
import ErrorSpan from "./index";

describe("ErroSpan", () => {
  test('renders without error message', () => {
    const { container } = render(<ErrorSpan error={false}>Error message</ErrorSpan>);
    const spanElement = container.querySelector('span');

    expect(spanElement).toBeInTheDocument();
    expect(spanElement).toHaveTextContent('');
  });

  test('renders with error message', () => {
    const { container } = render(<ErrorSpan error={true}>Error message</ErrorSpan>);
    const spanElement = container.querySelector('span');

    expect(spanElement).toBeInTheDocument();
    expect(spanElement).toHaveTextContent('Error message');
  });

  test('renders without error message when error prop is false', () => {
    const { container } = render(<ErrorSpan error={false}>Error message</ErrorSpan>);
    const spanElement = container.querySelector('span');

    expect(spanElement).toBeInTheDocument();
    expect(spanElement).toHaveTextContent('');
  });

  test('renders with error message when error prop is true', () => {
    const { container } = render(<ErrorSpan error={true}>Error message</ErrorSpan>);
    const spanElement = container.querySelector('span');

    expect(spanElement).toBeInTheDocument();
    expect(spanElement).toHaveTextContent('Error message');
  });
})
