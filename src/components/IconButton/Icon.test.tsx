import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import "jest-styled-components";

import IconButton, { IconButtonProps } from ".";

const defaultProps: IconButtonProps = {
  icon: "/img/plus.svg",
  size: "25px",
  color: "",
  onClick: () => {
    console.log("test");
  },
  isDisabled: false,
  isActive: false,
  id: "",
  className: "",
  style: {},
  testId: "icon-button",
};

describe("Icon button tests", () => {
  it("Render", () => {
    render(<IconButton {...defaultProps} />);

    expect(screen.getByTestId(/icon-button/i)).toBeTruthy();
  });

  it("Size", () => {
    render(<IconButton {...defaultProps} size={"20px"} />);

    expect(screen.getByTestId(/icon-button/i)).toHaveStyleRule("width", "20px");
    expect(screen.getByTestId(/icon-button/i)).toHaveStyleRule("width", "20px");
  });
});
