import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from ".";

describe("Button component", () => {
  it("renders children correctly", () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  it("applies default styles (green + md)", () => {
    render(<Button>Default</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("bg-green-500");
    expect(button).toHaveClass("px-4");
  });

  it("applies custom variant and size", () => {
    render(
      <Button variant="pink" size="lg">
        Large Pink
      </Button>
    );
    const button = screen.getByRole("button");
    expect(button).toHaveClass("bg-[#b91c5d]");
    expect(button).toHaveClass("px-6");
  });

  it("applies outline variant", () => {
    render(<Button variant="outline">Outlined</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("border");
    expect(button).toHaveClass("hover:bg-white");
  });

  it("accepts and merges additional className", () => {
    render(<Button className="custom-class">Custom</Button>);
    expect(screen.getByRole("button")).toHaveClass("custom-class");
  });

  it("handles onClick", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    fireEvent.click(screen.getByText("Click"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("disables the button when disabled prop is passed", () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByRole("button")).toBeDisabled();
  });
});
