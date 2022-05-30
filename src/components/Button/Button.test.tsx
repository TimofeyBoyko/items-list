import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Button, { ButtonProps } from ".";

const defaultProps: ButtonProps = {
  label: "Save",
  onClick: () => {
    console.log("clicked");
  },
  isDisabled: false,
  testId: "button",
  id: "",
  className: "",
  style: {},
};

describe("Button tests", () => {
  it("Render", () => {
    render(<Button {...defaultProps} />);

    expect(screen.getByTestId(/button/i)).toBeTruthy();
  });

  it("Label", () => {
    render(<Button {...defaultProps} />);

    expect(screen.getByText(/Save/i)).toBeTruthy();
  });

  it("Click", () => {
    let value: number = 0;

    const onClick = () => {
      value = 10;
    };

    render(<Button {...defaultProps} onClick={onClick} />);

    fireEvent.click(screen.getByTestId(/button/i));

    expect(value === 10).toBeTruthy();
  });

  it("Is disabled", () => {
    let value: number = 0;

    const onClick = () => {
      value = 10;
    };

    render(<Button {...defaultProps} isDisabled={true} onClick={onClick} />);

    expect(value === 0).toBeTruthy();
  });
});
