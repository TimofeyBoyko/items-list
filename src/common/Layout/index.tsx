import React from "react";

import Article from "../Article";

import StyledLayout from "./StyledLayout";

type LayoutProps = { children?: React.ReactNode };

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <StyledLayout>
      <Article></Article>
      {children}
    </StyledLayout>
  );
};

export default React.memo(Layout);
