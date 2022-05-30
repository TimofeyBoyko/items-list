import React from "react";
import StyledText from "./StyledText";

export type TextProps = {
  text: string;
  color?: string;
  backgroundColor?: string;
  fontSize?: string;
  fontWeight?: string;
  fontStyle?: string;
  lineHeight?: string;
  truncate?: boolean;
  noUserSelect?: boolean;
  isDisabled?: boolean;
  isBold?: boolean;
  testId?: string;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
};

const Text: React.FC<TextProps> = ({
  text,
  color,
  backgroundColor,
  fontSize,
  fontWeight,
  fontStyle,
  lineHeight,
  truncate,
  noUserSelect,
  isDisabled,
  isBold,
  testId,
  id,
  className,
  style,
}) => {
  return (
    <StyledText
      id={id}
      className={className}
      style={style}
      color={color}
      backgroundColor={backgroundColor}
      fontSize={fontSize}
      fontWeight={fontWeight}
      fontStyle={fontStyle}
      lineHeight={lineHeight}
      truncate={truncate}
      noUserSelect={noUserSelect}
      isDisabled={isDisabled}
      isBold={isBold}
      data-testid={testId}
    >
      {text}
    </StyledText>
  );
};

Text.defaultProps = {
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
  testId: "",
  id: "",
  className: "",
  style: {},
};

export default React.memo(Text);
