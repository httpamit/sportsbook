import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hamburger from "./Hamburger";

describe("Hamburger", () => {
  it("renders closed (Bars3Icon) by default", () => {
    render(<Hamburger isOpen={false} toggleMenu={jest.fn()} />);
    const button = screen.getByRole("button", { name: /toggle menu/i });
    expect(button).toBeInTheDocument();
    expect(button.querySelector("svg")).toBeInTheDocument();
  });

  it("renders open (XMarkIcon) when isOpen is true", () => {
    render(<Hamburger isOpen={true} toggleMenu={jest.fn()} />);
    const button = screen.getByRole("button", { name: /toggle menu/i });
    expect(button).toBeInTheDocument();
    expect(button.querySelector("svg")).toBeInTheDocument();
  });

  it("calls toggleMenu on click", () => {
    const toggleMock = jest.fn();
    render(<Hamburger isOpen={false} toggleMenu={toggleMock} />);
    const button = screen.getByRole("button", { name: /toggle menu/i });

    fireEvent.click(button);
    expect(toggleMock).toHaveBeenCalledTimes(1);
  });
});
