import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import "jest-styled-components";

import utils from "../../utils";

import Text, { TextProps } from ".";

const { globalColors } = utils;

const defaultProps: TextProps = {
  text: "Hello world!",
  color: "",
  backgroundColor: "",
  fontSize: "",
  fontWeight: "",
  fontStyle: "",
  lineHeight: "",
  truncate: false,
  noUserSelect: false,
  isDisabled: false,
  isBold: false,
  testId: "text",
  id: "",
  className: "",
  style: {},
};

describe("Text tests", () => {
  it("Render", () => {
    render(<Text {...defaultProps} />);

    expect(screen.getByTestId(/text/i)).toBeTruthy();
  });

  it("Text", () => {
    render(<Text {...defaultProps} color="red" />);

    expect(screen.getByText(/Hello world!/i)).toBeTruthy();
  });

  it("Color", () => {
    render(<Text {...defaultProps} color="red" />);

    expect(screen.getByTestId(/text/i)).toHaveStyleRule("color", "red");
  });

  it("Background color", () => {
    render(<Text {...defaultProps} backgroundColor="red" />);

    expect(screen.getByTestId(/text/i)).toHaveStyleRule("background", "red");
  });

  it("Font size", () => {
    render(<Text {...defaultProps} fontSize="20px" />);

    expect(screen.getByTestId(/text/i)).toHaveStyleRule("font-size", "20px");
  });

  it("Font weight", () => {
    render(<Text {...defaultProps} fontWeight="800" />);

    expect(screen.getByTestId(/text/i)).toHaveStyleRule("font-weight", "800");
  });

  it("Font style", () => {
    render(<Text {...defaultProps} fontStyle="italic" />);

    expect(screen.getByTestId(/text/i)).toHaveStyleRule("font-style", "italic");
  });

  it("Line height", () => {
    render(<Text {...defaultProps} lineHeight="25px" />);

    expect(screen.getByTestId(/text/i)).toHaveStyleRule("line-height", "25px");
  });

  it("Truncate", () => {
    render(<Text {...defaultProps} truncate={true} />);

    expect(screen.getByTestId(/text/i)).toHaveStyleRule(
      "text-overflow",
      "ellipsis"
    );
  });

  it("No user select", () => {
    render(<Text {...defaultProps} noUserSelect={true} />);

    expect(screen.getByTestId(/text/i)).toHaveStyleRule("user-select", "none");
  });

  it("Disabled", () => {
    render(<Text {...defaultProps} isDisabled={true} />);

    expect(screen.getByTestId(/text/i)).toHaveStyleRule(
      "color",
      globalColors.disabledText
    );
  });

  it("Bold", () => {
    render(<Text {...defaultProps} isBold={true} />);

    expect(screen.getByTestId(/text/i)).toHaveStyleRule("font-weight", "700");
  });
});
