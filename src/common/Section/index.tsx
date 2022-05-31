import React from "react";

import Text from "../../components/Text";

import { useAppSelector } from "../../utils/hooks";

import StyledSection from "./StyledSection";

type SectionProps = {
  children: React.ReactNode;
};

const Section = ({ children }: SectionProps) => {
  const { currentLabel } = useAppSelector(({ Settings }) => ({
    currentLabel: Settings.currentLabel,
  }));

  return (
    <StyledSection>
      <div className="section_header">
        <Text
          text={currentLabel}
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
