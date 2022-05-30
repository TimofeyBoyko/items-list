import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import "jest-styled-components";

import ArticleItem, { ArticleItemProps } from ".";

const defaultProps: ArticleItemProps = {
  text: "All cards",
  iconUrl: "/images/article.user.react.svg",
  isActive: false,
  value: "",
  onClick: (value: string) => {
    console.log(value);
  },
  testId: "ArticleItem",
  id: "",
  className: "",
  style: {},
};

describe("Article item tests", () => {
  it("Render", () => {
    render(<ArticleItem {...defaultProps} />);

    expect(screen.getByTestId(/ArticleItem/i)).toBeTruthy();
  });
});
