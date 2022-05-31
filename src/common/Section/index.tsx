import React from "react";

import Text from "../../components/Text";

import StyledSection from "./StyledSection";

type SectionProps = {
  children: React.ReactNode;
};

const Section = ({ children }: SectionProps) => {
  return (
    <StyledSection>
      <div className="section_header">
        <Text
          text={"All cards"}
          fontSize={"25px"}
          lineHeight={"30px"}
          isBold
          noUserSelect
        />
      </div>
      <div className="section_body">{children}</div>
      <div className="section_pagination"></div>
    </StyledSection>
  );
};

export default React.memo(Section);
